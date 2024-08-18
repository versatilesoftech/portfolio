import React, { useState } from "react";
import Components from "../../components/components";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const items = [
    { name: "Home", icon: <Components.Icons.Home />, sectionId: "hero" },
    { name: "Services", icon: <Components.Icons.HomeRepairServiceRounded />, sectionId: "services" },
    { name: "Projects", icon: <Components.Icons.DvrRounded />, sectionId: "projects" },
    { name: "Contact Us", icon: <Components.Icons.MailRounded />, sectionId: "contact" },
  ];

  return (
    <>
      <section className="mt-4 z-[50] position-sticky text-white top-0 mx-4 sm:mt-8 sm:mx-4 md:mt-8 md:mx-6 lg:mt-8 lg:mx-8">
        <div className="flex justify-between border-white border-b-2">
          <div className="font-extrabold text-3xl uppercase">Versatile</div>
          <div className="flex justify-center">
            <button
              className="px-3 py-2 rounded-tr-2xl bg-white text-black"
              onClick={toggleSidebar}
            >
              <Components.Icons.Menu />
            </button>
          </div>
        </div>

        {/* Sidebar Component */}
        <div
          className={`fixed z-[60] inset-0 bg-black bg-opacity-95 flex flex-col justify-between p-5 transform transition-transform duration-700 ease-in-in ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="text-white text-lg self-end"
            onClick={toggleSidebar}
          >
            <Components.Icons.Close />
          </button>
          <div className="flex z-50 justify-center items-center h-full text-white">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="group">
                  <a href={`#${item.sectionId}`} onClick={toggleSidebar}>
                    <div className="max-w-[23ch] text-center border-[.04rem] border-white bg-black bg-opacity-50 p-14 rounded relative overflow-hidden transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-4">
                      <div className="icon">{item.icon}</div>
                      <span className="absolute cursor-pointer inset-0 w-full h-full flex justify-center items-center bg-black font-bold rounded top-full transition-all duration-300 ease-in-out group-hover:top-0 group-hover:text-white">
                        {item.name}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
