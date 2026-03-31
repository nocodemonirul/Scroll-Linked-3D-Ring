import React from 'react';
import { ImageRing } from '../Section/ImageRing';
import { Color, Type, Space } from '../../Theme';

const images = [
  "https://picsum.photos/seed/clou1/800/800",
  "https://picsum.photos/seed/clou2/800/800",
  "https://picsum.photos/seed/clou3/800/800",
  "https://picsum.photos/seed/clou4/800/800",
  "https://picsum.photos/seed/clou5/800/800",
  "https://picsum.photos/seed/clou6/800/800",
  "https://picsum.photos/seed/clou7/800/800",
  "https://picsum.photos/seed/clou8/800/800",
  "https://picsum.photos/seed/clou9/800/800",
  "https://picsum.photos/seed/clou10/800/800",
  "https://picsum.photos/seed/clou11/800/800",
  "https://picsum.photos/seed/clou12/800/800",
  "https://picsum.photos/seed/clou13/800/800",
  "https://picsum.photos/seed/clou14/800/800",
  "https://picsum.photos/seed/clou15/800/800",
  "https://picsum.photos/seed/clou16/800/800",
  "https://picsum.photos/seed/clou17/800/800",
  "https://picsum.photos/seed/clou18/800/800",
  "https://picsum.photos/seed/clou19/800/800",
  "https://picsum.photos/seed/clou20/800/800",
  "https://picsum.photos/seed/clou21/800/800",
  "https://picsum.photos/seed/clou22/800/800",
  "https://picsum.photos/seed/clou23/800/800",
  "https://picsum.photos/seed/clou24/800/800",
  "https://picsum.photos/seed/clou25/800/800",
  "https://picsum.photos/seed/clou26/800/800",
  "https://picsum.photos/seed/clou27/800/800",
  "https://picsum.photos/seed/clou28/800/800",
  "https://picsum.photos/seed/clou29/800/800",
  "https://picsum.photos/seed/clou30/800/800",
  "https://picsum.photos/seed/clou31/800/800",
  "https://picsum.photos/seed/clou32/800/800",
];

const styles = {
  container: {
    backgroundColor: Color.Base.Surface[1],
    color: Color.Base.Content[1],
  },
};

export const Home: React.FC = () => {
  return (
    <main style={styles.container}>
      <ImageRing images={images} />
      <section style={{ 
        height: '100vh', 
        backgroundColor: Color.Base.Surface[2], // Different surface color for transition
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Space.XXL,
      }}>
        <h2 style={{ ...Type.Expressive.Display.M, color: Color.Base.Content[1] }}>
          Next Chapter
        </h2>
      </section>
    </main>
  );
};
