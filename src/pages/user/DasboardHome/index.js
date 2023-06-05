import { Link } from "react-router-dom";
import { UserContext } from "../../../components/layout/Dashboard";
import { useContext } from "react";
import Fade from "react-reveal";

// Images
import slideSample from "../../../assets/images/template1.png";
import { MdDelete, MdEdit } from "react-icons/md";

export default function DashboardHome() {
  const { user, slides } = useContext(UserContext);

  // Handle slide deletion
  async function handleDeleteSlide() {}

  // Handle slide edit
  async function handleEditSlide() {}

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20">
        <h1 className="text-xl font-bold ">My Slides</h1>

        <div className="flex flex-wrap gap-10 mt-10">
          {slides?.length === 0 && (
            <h2 className="mt-4">You do not have any slides yet...</h2>
          )}

          {slides?.map((slide) => (
            <div key={slide._id}>
              <Fade up duration={800} delay={100}>
                <div className=" mt-5 max-w-sm md:max-w-md lg:max-w-xs text-ubtisDarkBlue flex flex-col rounded-2xl">
                  <div className="w-full h-1/2">
                    <img
                      src={slide.image}
                      alt="Sample slide"
                      className="w-full h-full -mt-5 mx-auto object-cover rounded-tl-2xl rounded-tr-2xl"
                    />
                  </div>

                  {/* Slide title and ctas */}
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-center font-bold">{slide.title}</h3>

                    {/* CTAs */}
                    <div className="flex items-center gap-x-3">
                      <button onClick={() => handleEditSlide()}>
                        <MdEdit size={16} className="text-red-500" />
                      </button>
                      <button onClick={() => handleDeleteSlide()}>
                        <MdDelete size={16} className="text-red-500" />
                      </button>
                    </div>
                  </div>

                  {/* Edited */}
                  <h3 className="text-sm mt-5">Edited {slide.updatedAt}</h3>
                </div>
              </Fade>
            </div>
          ))}

          {/* SAMPLE DATA */}
          <Fade up duration={800} delay={100}>
            <div className=" mt-5 max-w-sm md:max-w-md lg:max-w-xs text-ubtisDarkBlue flex flex-col rounded-2xl">
              <div className="w-full h-1/2">
                <img
                  src={slideSample}
                  alt="Sample slide"
                  className="w-full h-full -mt-5 mx-auto object-cover rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              {/* Slide title and ctas */}
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-center font-bold">Sample slide</h3>

                {/* CTAs */}
                <div className="flex items-center gap-x-3">
                  <button>
                    <MdEdit size={16} className="text-red-500" />
                  </button>
                  <button>
                    <MdDelete size={16} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Edited */}
              <h3 className="text-sm mt-5">Edited 3 hours ago</h3>
            </div>
          </Fade>

          <Fade up duration={800} delay={100}>
            <div className=" mt-5 max-w-sm md:max-w-md lg:max-w-xs text-ubtisDarkBlue flex flex-col rounded-2xl">
              <div className="w-full h-1/2">
                <img
                  src={slideSample}
                  alt="Sample slide"
                  className="w-full h-full -mt-5 mx-auto object-cover rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              {/* Slide title and ctas */}
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-center font-bold">Sample slide</h3>

                {/* CTAs */}
                <div className="flex items-center gap-x-3">
                  <button>
                    <MdEdit size={16} className="text-red-500" />
                  </button>
                  <button>
                    <MdDelete size={16} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Edited */}
              <h3 className="text-sm mt-5">Edited 3 hours ago</h3>
            </div>
          </Fade>

          <Fade up duration={800} delay={100}>
            <div className=" mt-5 max-w-sm md:max-w-md lg:max-w-xs text-ubtisDarkBlue flex flex-col rounded-2xl">
              <div className="w-full h-1/2">
                <img
                  src={slideSample}
                  alt="Sample slide"
                  className="w-full h-full -mt-5 mx-auto object-cover rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              {/* Slide title and ctas */}
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-center font-bold">Sample slide</h3>

                {/* CTAs */}
                <div className="flex items-center gap-x-3">
                  <button>
                    <MdEdit size={16} className="text-red-500" />
                  </button>
                  <button>
                    <MdDelete size={16} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Edited */}
              <h3 className="text-sm mt-5">Edited 3 hours ago</h3>
            </div>
          </Fade>

          <Fade up duration={800} delay={100}>
            <div className=" mt-5 max-w-sm md:max-w-md lg:max-w-xs text-ubtisDarkBlue flex flex-col rounded-2xl">
              <div className="w-full h-1/2">
                <img
                  src={slideSample}
                  alt="Sample slide"
                  className="w-full h-full -mt-5 mx-auto object-cover rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              {/* Slide title and ctas */}
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-center font-bold">Sample slide</h3>

                {/* CTAs */}
                <div className="flex items-center gap-x-3">
                  <button>
                    <MdEdit size={16} className="text-red-500" />
                  </button>
                  <button>
                    <MdDelete size={16} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Edited */}
              <h3 className="text-sm mt-5">Edited 3 hours ago</h3>
            </div>
          </Fade>

          <Fade up duration={800} delay={100}>
            <div className=" mt-5 max-w-sm md:max-w-md lg:max-w-xs text-ubtisDarkBlue flex flex-col rounded-2xl">
              <div className="w-full h-1/2">
                <img
                  src={slideSample}
                  alt="Sample slide"
                  className="w-full h-full -mt-5 mx-auto object-cover rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              {/* Slide title and ctas */}
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-center font-bold">Sample slide</h3>

                {/* CTAs */}
                <div className="flex items-center gap-x-3">
                  <button>
                    <MdEdit size={16} className="text-red-500" />
                  </button>
                  <button>
                    <MdDelete size={16} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Edited */}
              <h3 className="text-sm mt-5">Edited 3 hours ago</h3>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
