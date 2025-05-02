import PersonalHeader from "./components/personal-header/personal-header"

export default function Page() {
    return (
        <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <PersonalHeader />
      </div>
        </div>
    )
}

