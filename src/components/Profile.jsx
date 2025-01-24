import React, { useState, useEffect } from 'react';

const Profile = () => {

  const [currentText, setCurrentText] = useState('|');
  const fullText = 'I\'m a passionate web developer,I help building useful websites with rich user-experience';
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallax = document.querySelector('.parallax-background');
      if (parallax) {
        parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let index = isDeleting ? currentText.length - 1 : currentText.length;
    const timer = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setCurrentText(fullText.substring(0, index + 1));
      } else if (isDeleting && index > 0) {
        setCurrentText(fullText.substring(0, index - 1));
      } else {
        setIsDeleting(!isDeleting);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed]);

  return (
    <div className="relative min-h-screen overflow-hidden w-full" id="profile">
      {/* Parallax Background */}
      <div
        className="parallax-background absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
          'url(https://cdn.pixabay.com/photo/2023/01/21/13/39/night-sky-7733876_1280.jpg)',
          filter: 'blur(5px)',
          transform: 'scale(1.2)',
          height: '100vh',
          zIndex: '-1',
        }}
      />

      {/* Content */}
      {/* Content */}
      <div className="relative  flex flex-col items-center justify-center min-h-screen text-center text-gray-900 p-4">
        <div className=" text-5xl md:text-9xl sm:text-6xl font-bold mb-2" style={{fontFamily:'Saira Stencil One',fontWeight:800}}>ΔMΔN </div>
        <h4 className="text-xl md:text-2xl sm:text-sm font-bold mt-4">Hey, I'm Aman Kumar Yadav</h4>

        {/* About me */}
        <p className="text-sm md:text-xl sm:text-sm text-white mt-2 max-w-md">
          <span className="inline-block relative">
            {currentText + '|'}
            {/* <span className="absolute bottom-0 left-full h-full w-1 bg-gray-900 animate-blink"></span> */}
          </span>
        </p>
      </div>

      

      
    </div>
  );
};

export default Profile;

