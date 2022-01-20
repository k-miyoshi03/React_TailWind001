import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './dist.css';
import reportWebVitals from './reportWebVitals';
import {CopyRight, H2, Nav, Img, H3, Ptag} from './components/index';
import Atag from './components/atag';




ReactDOM.render(
  <React.StrictMode>
    <H2 className={'w-32 flex-initial pt-3 pb-3'} text={<Atag link={'./index.html'} text={<Img src={'./img/logo.svg'} alt={'Profile'}/>}/>}/>
    <Nav className={'flex-initial ml-auto mt-auto mb-auto'}/>
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Img src={'./img/mainvisual.jpg'} alt={'mainvisual'} className={'mb-10'} />
    <H2 id={'about'} text={'About'} className={'text-center text-4xl font-bold underline underline-offset-4 decoration-1 mb-10'}/>
    <div className={"flex sm:justify-center items-center mb-28 sm:flex-row flex-col"}>
      <Img src={'./img/about.jpg'} alt={'About'} className={'rounded-full w-24 h-24 mr-5'}/>
    <div className={"flex flex-col"}>
      <H3 text={'KAKERU MIYAICHI'} className={'font-medium mt-2 mb-2'}/>
      <Ptag className={'text-sm'} text={'テキストテキストテキストテキストテキストテキストテキスト|テキストテキストテキストテキストテキストテキストテキスト|テキストテキストテキストテキストテキストテキストテキスト'}/>
    </div>
    </div>
      <H2 id={'bicycle'} text={'Bicycle'}  className={'text-center text-4xl font-bold underline underline-offset-4 decoration-1 mb-10'}/>
    <div className={'flex mb-28 sm:flex-row flex-col'}>
      <div className={'text-center'}>
        <Img src={'./img/bicycle1.jpg'} alt={'Bicycle1'} className={'pl-5 pr-2'} />
        <H3 text={'タイトルタイトル'} className={'font-bold mt-2 mb-2'} />
        <Ptag className={'text-sm mb-10'} text={'テキストテキストテキスト'} />
      </div>
      <div className={'text-center'}>
        <Img src={'./img/bicycle2.jpg'} alt={'Bicycle2'} className={'pl-2 pr-2'} />
        <H3 text={'タイトルタイトル'} className={'font-bold mt-2 mb-2'} />
        <Ptag className={'text-sm mb-10'} text={'テキストテキストテキスト'} />
      </div>
      <div className={'text-center'}>
        <Img src={'./img/bicycle3.jpg'} alt={'Bicycle2'} className={'pl-2 pr-5'} />
        <H3 text={'タイトルタイトル'} className={'font-bold mt-2 mb-2'}/>
        <Ptag className={'text-sm mb-10'} text={'テキストテキストテキスト'} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('main')
)


ReactDOM.render(
  <React.StrictMode>
    <CopyRight copyright={"© 2020 Profile"}/>
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
