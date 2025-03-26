import {Types} from './Types';


export default {
    title: "BodyType/Types",
    component: Types,
};

export const Default = {
    args: {
        images: [{
            rectangle: "path/to/rectangle.jpg",
            leftTriangle: "path/to/left_triangle.jpg",
            circle: "path/to/circle.jpg",
            hourglass: "path/to/hourglass.jpg",
            triangle: "path/to/triangle.jpg"
        }]

    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};