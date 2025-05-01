
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { ImageType } from '@/components/Gallery';

const GALLERY_DATA = {
  galaxies: {
    title: "Distant Galaxies",
    description: "Explore the vast cosmic wonders of distant galaxies, nebulas and star clusters, showcasing the incredible beauty of our universe far beyond our reach.",
    images: [
      {
        id: "gal-1",
        src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Milky Way Galaxy",
        category: "Galaxy"
      },
      {
        id: "gal-2",
        src: "https://images.unsplash.com/photo-1462331321792-cc44368b8894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Andromeda Galaxy",
        category: "Galaxy"
      },
      {
        id: "gal-3",
        src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Nebula Formation",
        category: "Nebula"
      },
      {
        id: "gal-4",
        src: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Eagle Nebula",
        category: "Nebula"
      },
      {
        id: "gal-5",
        src: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Spiral Galaxy",
        category: "Galaxy"
      },
      {
        id: "gal-6",
        src: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Star Cluster",
        category: "Stars"
      }
    ]
  },
  northernLights: {
    title: "Northern Lights",
    description: "Witness the magical dance of auroras in the night sky, where solar particles collide with atmospheric gases to create these mesmerizing light displays.",
    images: [
      {
        id: "nl-1",
        src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Green Aurora",
        category: "Aurora"
      },
      {
        id: "nl-2",
        src: "https://images.unsplash.com/photo-1517577316436-d35397e0e778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Aurora Over Mountains",
        category: "Aurora"
      },
      {
        id: "nl-3",
        src: "https://images.unsplash.com/photo-1579033385971-a7bc8c6f8c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Colorful Sky Display",
        category: "Aurora"
      },
      {
        id: "nl-4",
        src: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Winter Aurora",
        category: "Aurora"
      },
      {
        id: "nl-5",
        src: "https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Purple Lights",
        category: "Aurora"
      },
      {
        id: "nl-6",
        src: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Aurora Reflection",
        category: "Aurora"
      }
    ]
  },
  deserts: {
    title: "Mirror Deserts",
    description: "Discover the surreal beauty of salt flats and mirror deserts, where the boundary between sky and earth dissolves into stunning reflective landscapes.",
    images: [
      {
        id: "des-1",
        src: "https://images.unsplash.com/photo-1520769164658-1e48675e7aad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Salar de Uyuni",
        category: "Salt Flat"
      },
      {
        id: "des-2",
        src: "https://images.unsplash.com/photo-1578987402324-d1c7387e5daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Starry Night Reflection",
        category: "Salt Flat"
      },
      {
        id: "des-3",
        src: "https://images.unsplash.com/photo-1532638667160-2c0c56ba3d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Desert Mirage",
        category: "Desert"
      },
      {
        id: "des-4",
        src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Flooded Salt Flat",
        category: "Salt Flat"
      },
      {
        id: "des-5",
        src: "https://images.unsplash.com/photo-1582550453031-6c0b364f0e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Desert Sunrise",
        category: "Desert"
      },
      {
        id: "des-6",
        src: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "Mirror Lake",
        category: "Lake"
      }
    ]
  }
};

const Index = () => {
  return (
    <div className="bg-space-gradient min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="py-10">
        <Gallery 
          title={GALLERY_DATA.galaxies.title}
          description={GALLERY_DATA.galaxies.description}
          images={GALLERY_DATA.galaxies.images}
          id="galaxies"
        />
        
        <Gallery 
          title={GALLERY_DATA.northernLights.title}
          description={GALLERY_DATA.northernLights.description}
          images={GALLERY_DATA.northernLights.images}
          id="northern-lights"
        />
        
        <Gallery 
          title={GALLERY_DATA.deserts.title}
          description={GALLERY_DATA.deserts.description}
          images={GALLERY_DATA.deserts.images}
          id="deserts"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
