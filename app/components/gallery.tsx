import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

function Gallery() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const images = [
    { label: "Custom Packaging", path: "/Products/Boxes/CustPacking.jpg" },
    { label: "General Dump Box", path: "/Products/Boxes/GeneralDump.jpg" },
    {
      label: "Plywood and Pinewood Box",
      path: "/Products/Boxes/PlywoodAndPinewoodBox.jpg",
    },
    { label: "Plywood Box", path: "/Products/Boxes/PlywoodBox.jpg" },
    { label: "Plywood Box 1", path: "/Products/Boxes/PlywoodBox1.jpg" },
    { label: "Plywood Box 2", path: "/Products/Boxes/PlywoodBox2.jpg" },
    { label: "Plywood Box Copy", path: "/Products/Boxes/PlywoodBoxCopy.jpg" },
    {
      label: "Plywood Box with Air Cushioning Bottom",
      path: "/Products/Boxes/PlywoodBoxAirCushioningBottom.jpg",
    },
    {
      label: "Plywood Box Customised 3",
      path: "/Products/Boxes/PlywoodBoxCustomised3.jpg",
    },
    {
      label: "Plywood Box Detailed Packaging 4",
      path: "/Products/Boxes/PlywoodBoxDetailedPacking4.jpg",
    },
    {
      label: "Plywood Box with Internal Multilevel Cardboard Partitions",
      path: "/Products/Boxes/PlywoodBoxWithInternalMultilevelCardboardPartitions.jpg",
    },
    {
      label: "Plywood Customised Packing 6",
      path: "/Products/Boxes/PlywoodCustomisedPacking6.jpg",
    },
    {
      label: "Jungle Wood Crate",
      path: "/Products/Crates/JungleWoodCrate.jpg",
    },
    { label: "Pine Wood Crate", path: "/Products/Crates/PineWoodCrate.jpg" },
    { label: "Plywood Crate", path: "/Products/Crates/PlyWoodCrate.jpg" },
    {
      label: "Pallet",
      path: "/Products/Pallet/General/Pallet_2.jpg",
    },
    {
      label: "Pallet",
      path: "/Products/Pallet/General/Pallet_3.jpg",
    },
    {
      label: "Pallet",
      path: "/Products/Pallet/General/Pallet_4.jpg",
    },
    {
      label: "Euro Pallet",
      path: "/Products/Pallet/PalletTypes/EuroPallet.jpg",
    },
    {
      label: "Four-Way Entry Close Boarded Pallet",
      path: "/Products/Pallet/PalletTypes/FWEntryCloseBoardedPallet.jpg",
    },
    {
      label: "Four-Way Entry Close Boarded Perimeter Base Pallet",
      path: "/Products/Pallet/PalletTypes/FWEntryCloseBoardedPerimeterBasePallet.jpg",
    },
    {
      label: "Four-Way Entry Open Boarded Pallet",
      path: "/Products/Pallet/PalletTypes/FWEntryOpenBoardedPallet.jpg",
    },
    {
      label: "Four-Way Entry Perimeter Base Pallet",
      path: "/Products/Pallet/PalletTypes/FWEntryPerimeterBasePallet.jpg",
    },
    {
      label: "Four-Way Entry Wing Type Pallet",
      path: "/Products/Pallet/PalletTypes/FWEntryWingTypePallet.jpg",
    },
    {
      label: "Two-Way Entry Close Boarded Pallet",
      path: "/Products/Pallet/PalletTypes/TWEntryCloseBoardedPallet.jpg",
    },
    {
      label: "Two-Way Entry Reversible Pallet",
      path: "/Products/Pallet/PalletTypes/TWEntryReversiblePallet.jpg",
    },
    {
      label: "Two-Way Entry Wing Type Pallet",
      path: "/Products/Pallet/PalletTypes/TWEntryWingTypePallet.jpg",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <div className="relative h-24 md:h-64 w-full">
              <Image
                src={image.path}
                alt={image.label}
                fill
                className="cursor-pointer shadow-lg hover:opacity-80 object-cover"
                onClick={() => {
                  setSlide(index + 1);
                  setToggler(!toggler);
                }}
              />
            </div>
            <div className="w-full py-2 text-xs font-montesserat bg-white border-2 text-iblue text-center ">
              {image.label}
            </div>
          </div>
        ))}
      </div>
      <FsLightbox
        toggler={toggler}
        sources={images.map((img) => img.path)}
        slide={slide}
      />
    </div>
  );
}
export default Gallery;
