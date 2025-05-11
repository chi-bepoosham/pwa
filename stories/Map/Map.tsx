"use client"

import React, {useEffect, useRef, useState} from "react";
import {AutocompleteItem, Button} from "@heroui/react";
import {CloseOutlined, FmdGood, MyLocation, SearchOutlined,} from "@mui/icons-material";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat, toLonLat} from 'ol/proj';
import 'ol/ol.css';
// import { MinorSelect } from "../MinorSelect";
import { ClickAwayListener } from "@mui/material";
import {useForm} from "react-hook-form";

type Position = {
    latitude: number;
    longitude: number;
}

export type MapProps = {
    position?: Position;
    zoom?: number;
    onChange?: (v: Position) => void;
    withSearchBox?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

const defaultPosition = {latitude: 35.700153, longitude: 51.338378}
export const MapContainer = (props: MapProps) => {

    const position = props.position || defaultPosition
    const zoom = props.zoom || 15

    const count = useRef(0)
    const havePosition = useRef(!!props.position)


    useEffect(() => {
        havePosition.current = !!props.position
    }, [props.position ? Object.values(props.position).join(",") : undefined]);


    useEffect(() => {
        if (!props.position) getUserLocation()
    }, []);


    const setValue = (position: Position) => {
        const lonLat = toLonLat([position.longitude, position.latitude])
        if (props?.onChange) props.onChange({latitude: lonLat[1], longitude: lonLat[0]});
    }

    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<Map | null>(null);
    useEffect(() => {
        if (!mapRef.current) return;

        mapInstance.current = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({source: new OSM()})
            ],
            view: new View({
                center: fromLonLat([position.longitude, position.latitude]),
                zoom: zoom,
            })
        });

        mapInstance.current.on('moveend', () => {
            if (mapInstance.current) {
                count.current++
                const _center = mapInstance.current?.getView().getCenter()
                if (_center) {
                    const [lon, lat] = _center;
                    const newCenter: [number, number] = [lat, lon];
                    const pos = {latitude: newCenter[0], longitude: newCenter[1]}
                    if (count.current > 1 || (!havePosition.current && count.current > 1)) setValue(pos)
                }
            }
        });


        return () => {
            if (mapInstance.current) {
                mapInstance.current.setTarget(undefined);
            }
        }
    }, []);

    const goTo = (p: Position) => {
        if (!mapInstance.current) return;
        mapInstance.current.getView().animate({
            center: fromLonLat([p.longitude, p.latitude]),
            zoom: zoom,
            duration: 1000,
        });
    }
    const [isTracking, setIsTracking] = useState(false);
    const getUserLocation = () => {
        if (!navigator.geolocation) {
            alert('مرورگر شما از Geolocation API پشتیبانی نمی‌کند');
            return;
        }
        setIsTracking(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = position.coords
                goTo(pos)
                setIsTracking(false)
            },
            (error) => {
                alert(`خطا در دریافت موقعیت: ${error.message}`)
                setIsTracking(false)
            },
            {enableHighAccuracy: true, timeout: 10000}
        );
    };

    return (
        <div className="relative overflow-hidden rounded-xl flex justify-center items-center w-full bg-gray-100">
            {props.isReadOnly && <div className="absolute h-full w-full z-10" aria-label="readonly"/>}
            {props.isDisabled && <div className="absolute h-full w-full z-10 bg-black/20" aria-label="disabled"/>}
            <div
                ref={mapRef}
                className="h-72 w-full"
            />
            {position && props.withSearchBox && (
                <SearchMap
                    position={position}
                    goTo={goTo}
                />
            )}
            <div className="absolute bottom-0 start-0 m-3 text-sm h-10">
                <div className="flex h-full items-center gap-2">
                    <Button
                        aria-label="current location"
                        isIconOnly
                        color="primary"
                        radius="full"
                        size="md"
                        onPress={getUserLocation}
                        isLoading={isTracking}
                    >
                        <MyLocation/>
                    </Button>
                </div>
            </div>
            <div className="absolute">
                <div className="flex justify-center items-center text-blue-600">
                    <FmdGood fontSize="large"/>
                </div>
            </div>

        </div>
    );
};


export default MapContainer

// export type LocationList = {
//     category: string;
//     location: { x: number; y: number };
//     region: string;
//     title: string;
//     type: string;
// };
//

const SearchMap = ({position, goTo}: { position: Position; goTo: (c: Position) => void }) => {

    const [isVisible, setVisible] = useState(false)

    const {
        control,
        watch,
    } = useForm()

    const location = watch("location")
    useEffect(() => {
        if (!!location) {
            const coordinate = location.split("_").map((v: string) => (parseFloat(v)))
            const p = {latitude: coordinate[0], longitude: coordinate[1]};
            goTo(p)
        }
    }, [location])


    return (
        <div className="absolute top-0 end-0 m-3 h-12">
            <ClickAwayListener onClickAway={() => setVisible(false)}>
                <div className="flex h-full items-center gap-2">
                    {isVisible && (
                        <></>
                        // <MinorSelect
                        //     label="جستجوی مکان"
                        //     name="location"
                        //     control={control}
                        //     isSearchable
                        //     size="sm"
                        //     dynamic={{
                        //         route: "neshan/searchAddress",
                        //         filter: {
                        //             lat: String(position.latitude),
                        //             lng: String(position.longitude),
                        //         },
                        //         disablePagination: true,
                        //         withSelected: false,
                        //     }}
                        //     itemBuilder={(item) => {
                        //         return (
                        //             <AutocompleteItem key={item.key}>
                        //                 <div className="flex flex-col">
                        //                     <h3 className="font-bold">{item.label}</h3>
                        //                     <span className="text-gray-600">{item.address}</span>
                        //                 </div>
                        //             </AutocompleteItem>
                        //         )
                        //     }}
                        // />
                    )}
                    <Button
                        aria-label="search location"
                        isIconOnly
                        color="primary"
                        radius="full"
                        size="md"
                        onPress={() => setVisible((visible) => !visible)}
                    >
                        {isVisible ? <CloseOutlined/> : <SearchOutlined/>}
                    </Button>
                </div>
            </ClickAwayListener>
        </div>
    )
}