import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import img1 from '@/assets/DSC02015.JPG';

function Nhd_gallery() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-10 gap-1 h-full w-full p-5 shadow-sm">
      <div className="row-span-4 cursor-pointer" onClick={() => openModal(img1)}>
        <Image src={img1} className="h-full" />
      </div>
      <div className="row-span-5 bg-red-500 cursor-pointer" onClick={() => openModal(img1)}>
        <Image src={img1} className="h-full" />
      </div>
      <div className="row-span-6 bg-slate-200 cursor-pointer" onClick={() => openModal(img1)}>
        <Image src={img1} className="h-full" />
      </div>
      <div className="row-span-5 bg-yellow-100 cursor-pointer" onClick={() => openModal(img1)}>
        <Image src={img1} className="h-full" />
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {selectedImage && (
          <div>
            <Image src={selectedImage} className="w-full" />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Nhd_gallery;
