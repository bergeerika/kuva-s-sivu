import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <div className="App">
    <main className="layout">
      <h3>Kuvia</h3> 

        <ImageList sx={{ width: 1100, height: 750 }} cols={4} rowHeight={300}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
           </ImageListItem>
         ))}
        </ImageList>
      </main>
    </div>
  );
}

const itemData = [
  {
    img: 'https://picsum.photos/id/112/500/400',
  },
  {
    img: 'https://picsum.photos/id/1011/500/500',
  },
  {
    img: 'https://picsum.photos/id/1015/500/500',
  },
  {
    img: 'https://picsum.photos/id/1003/500/500',
  },
  {
    img: 'https://picsum.photos/id/1020/500/500',
  },
  {
    img: 'https://picsum.photos/id/1022/500/500',
  },
  {
    img: 'https://picsum.photos/id/1024/500/500',
  },
  {
    img: 'https://picsum.photos/id/1026/500/500',
  },
  {
    img: 'https://picsum.photos/id/1035/500/500',
  },
  {
    img: 'https://picsum.photos/id/1044/500/500',
  },
  {
    img: 'https://picsum.photos/id/1063/500/500',
  },
  {
    img: 'https://picsum.photos/id/106/500/500',
  },
];

