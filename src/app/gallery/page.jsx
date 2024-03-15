'use client'
import NhdImageGallery from '@/components/NhdImageGalley'
import { useState,useEffect } from 'react'
import {FaArrowUp} from 'react-icons/fa'



const Gallery = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const images = [
    {
        "id": 1,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090758/Nhd/Nhd%20live/_90A3708_d6ndhi.jpg",
        "alt": "Image 1-"
    },
    {
        "id": 2,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691147366/_90A4147_cut_rmqj3t.jpg",
        "alt": "Image 2-"
    },
    {
        "id": 3,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090757/Nhd/Landing%20page/_90A3794_okzf8t.jpg",
        "alt": "Image 3-"
    },
    {
        "id": 4,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691147274/_90A3691_picdgk.jpg",
        "alt": "Image 4-"
    },
    {
        "id": 5,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090773/Nhd/sendgb-kQgRcOs18SH/1.jpeg_miihie.jpg",
        "alt": "Image 5-"
    },
    {
        "id": 6,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090770/Nhd/Nhd%20live/_90A7312_tntreg.jpg",
        "alt": "Image 6-"
    },
    {
        "id": 7,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090754/Nhd/Nhd%20live/Screen_Shot_2023-07-24_at_11.04.51_PM_dtkdys.png",
        "alt": "Image 7-"
    },
    {
        "id": 8,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159271/_E7A3547-HDR-min_b0rvp0.jpg",
        "alt": "Image 8-"
    },
    {
        "id": 9,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691609412/8.jpeg_eee3hw.jpg",
        "alt": "Image 9-"
    },
    {
        "id": 10,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691158793/_E7A3716-min_bam3zn.jpg",
        "alt": "Image 10-"
    },
    {
        "id": 11,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1693057053/_90A3874_qyedv6.jpg",
        "alt": "Image 11-"
    },
    {
        "id": 12,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692514505/_90A3978_img_qndvji.jpg",
        "alt": "Image 12-"
    },
    {
        "id": 13,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090778/Nhd/sendgb-kQgRcOs18SH/1_jq9d9h.jpg",
        "alt": "Image 13-"
    },
    {
        "id": 14,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692383798/Nhd/Landing%20page/_MG_0203_cmwvfs.jpg",
        "alt": "Image 14-"
    },
    {
        "id": 15,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg",
        "alt": "Image 15-"
    },
    {
        "id": 16,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg",
        "alt": "Image 16-"
    },
    {
        "id": 17,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692515018/_90A3755_jpzzpg.jpg",
        "alt": "Image 17-"
    },
    {
        "id": 18,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159086/_E7A3600_itaa2t.jpg",
        "alt": "Image 18-"
    },
    {
        
        "id": 19,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/mohit_itxxcc.jpg",
        "alt": "Image 19-"
    },
    {
        "id": 20,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089751/live/_90A3767_nycw2k.jpg",
        "alt": "Image 20-"
    },
    {
      id: 61,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515446/satyajit_ray_archives_invitation_hbf23u.jpg',
      alt: 'Image 61-'
    },
    {
      id: 62,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515444/nhd_invitation_the_music_of_satyajit_ray_zfi3xq.jpg',
      alt: 'Image 62-'
    },
    {
        "id": 21,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089104/live/_E7A3920_zlshod.jpg",
        "alt": "Image 21-"
    },
    {
        "id": 22,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089106/live/_E7A3995_opjijl.jpg",
        "alt": "Image 22-"
    },
    {
        "id": 23,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089106/live/_90A3853_vl3rgi.jpg",
        "alt": "Image 23-"
    },
    {
        "id": 24,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860301318-Enhanced_fcukli.jpg",
        "alt": "Image 24-"
    },
    {
        "id": 25,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860281006_wmli14.jpg",
        "alt": "Image 25-"
    },
    {
        "id": 26,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691859991006_msidly.jpg",
        "alt": "Image 26-"
    },
    {
        "id": 27,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691860272974_zaszqf.jpg",
        "alt": "Image 27-"
    },
    {
        "id": 28,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691859937861_htyzlq.jpg",
        "alt": "Image 28-"
    },
    {
        "id": 29,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691860226589-Enhanced_kxm0mk.jpg",
        "alt": "Image 29-"
    },
    {
        "id": 30,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859968447_pawomw.jpg",
        "alt": "Image 30-"
    },
    {
        "id": 31,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859929135_fg5o5h.jpg",
        "alt": "Image 31-"
    },
    {
        "id": 32,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859951612_nafv5i.jpg",
        "alt": "Image 32-"
    },
    {
        "id": 33,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860301318-Enhanced_fcukli.jpg",
        "alt": "Image 33-"
    },
    {
        "id": 34,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860281006_wmli14.jpg",
        "alt": "Image 34-"
    },
    {
        "id": 35,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691859991006_msidly.jpg",
        "alt": "Image 35-"
    },
    {
        "id": 36,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691860272974_zaszqf.jpg",
        "alt": "Image 36-"
    },
    {
        "id": 37,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691859937861_htyzlq.jpg",
        "alt": "Image 37-"
    },
    {
        "id": 38,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691860226589-Enhanced_kxm0mk.jpg",
        "alt": "Image 38-"
    },
    {
        "id": 39,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859968447_pawomw.jpg",
        "alt": "Image 39-"
    },
    {
        "id": 40,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859929135_fg5o5h.jpg",
        "alt": "Image 40-"
    },
    {
      id: 63,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515470/the_music_of_satyajit_ray_a5xlxd.jpg',
      alt: 'Image 63-'
    },
    {
      id: 64,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515468/the_club_sandwitch_zext9v.jpg',
      alt: 'Image 64-'
    },

    {
        "id": 41,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859951612_nafv5i.jpg",
        "alt": "Image 41-"
    },
    {
        "id": 42,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159271/_E7A3547-HDR-min_b0rvp0.jpg",
        "alt": "Image 42-"
    },
    {
        "id": 43,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159272/_E7A3668-min_j7wavs.jpg",
        "alt": "Image 43-"
    },
    {
        "id": 44,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159606/_E7A3459-HDR-min_bfzm81.jpg",
        "alt": "Image 44-"
    },
    {
        "id": 45,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159271/_E7A3575-HDR-min_nmd8g2.jpg",
        "alt": "Image 45-"
    },
    {
        "id": 46,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159087/_E7A3619_uo5as6.jpg",
        "alt": "Image 46-"
    },
    {
        "id": 47,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159086/_E7A3638_qyqqeb.jpg",
        "alt": "Image 47-"
    },
    {
        "id": 48,
        "src": "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
        "alt": "Image 48-"
    },
    {
      id: 49,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/pritam_iq8izz.jpg',
      alt: 'Image 1-',
    },
    { 
      id: 50,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089751/live/_90A3739_zes7ux.jpg',
      alt: 'Image 2-',
    },
    {
      id: 51,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/12.jpeg_nnfskm.jpg',
      alt: 'Image 3-',
    },
    {
      id: 52,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/arijit_1_ln8jpz.jpg',
      alt: 'Image 7-',
    }
    ,
    {
      id: 53,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/lata_at_first_zrrunk.jpg',
      alt: 'Image 8-',
    }
    ,
    {
      id: 54,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/11.jpeg_o9qcbm.jpg',
      alt: 'Image 9-',
    },
    {
      id: 55,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089432/about/10.jpeg_ptqc7j.jpg',
      alt: 'Image 4-',
    },
    {
      id: 56,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089432/about/arijit_2_r1kajw.jpg',
      alt: 'Image 5-',
    }
    ,
    {
      id: 57,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090781/Nhd/sendgb-kQgRcOs18SH/4.jpeg_vgcnjd.jpg',
      alt: 'Image 57-',
    },
    //new updates 15-03-2024
    {
        id: 58,
        src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515360/charulata_2_qrumtc.jpg',
        alt: 'Image 58-',
      },
      {
        id: 59,
        src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515390/charulata_rlym08.jpg',
        alt: 'Image 59-',
      },
      {
        id: 60,
        src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515423/kolkatar_korcha_raemkl.jpg',
        alt: 'Image 60-',
      },
      

]
  return (
   <> <div><NhdImageGallery images={images}/></div>
    {/* Scroll to Top Button */}
    {showScrollButton && (
        <div className='fixed bottom-10 right-10 z-[500]'>
          <button
            className='bg-blue-600/50 text-cyan-50 hover:bg-slate-50 hover:text-black p-2 rounded-full flex justify-evenly items-center'
            onClick={scrollToTop}
          >
           <p className="mx-2 hidden md:block">
             Scroll to Top 
            </p> 
             <FaArrowUp size={15} color='white'/>
          </button>
        </div>
      )}
   </>
    
  )
}

export default Gallery