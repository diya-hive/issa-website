import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Gallery() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const images = [
    "/Products/Boxes/GeneralDump.jpg",
    "/Products/Boxes/PlywoodAndPinewoodBox.jpg",
    "/Products/Boxes/PlywoodBox.jpg",
    "/Products/Boxes/PlywoodBox1.jpg",
    "/Products/Boxes/PlywoodBox2.jpg",
    "/Products/Boxes/PlywoodBoxCopy.jpg",
    "/Products/Boxes/PlywoodBoxAirCushioningBottom.jpg",
    "/Products/Boxes/PlywoodBoxCustomised3.jpg",
    "/Products/Boxes/PlywoodBoxDetailedPackaging4.jpg",
    "/Products/Boxes/PlywoodBoxWithInternalMultilevelCardboardPartitions.jpg",
    "/Products/Boxes/PlywoodCustomisedPacking6.jpg",
    "/Products/Crates/JungleWoodCrate.jpg",
    "/Products/Crates/PineWoodCrate.jpg",
    "/Products/Crates/PlyWoodCrate.jpg",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-16">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="cursor-pointer shadow-lg hover:opacity-80 object-cover w-full h-48"
              onClick={() => {
                setSlide(index + 1);
                setToggler(!toggler);
              }}
            />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler} sources={images} slide={slide} />
    </div>
  );
}

export default Gallery;
