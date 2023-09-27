import React from 'react'
import { Link, graphql } from 'gatsby'



const index = ({ data }) => {
  const content = data.allStrapiHomepage.nodes[0];

  return (
    <div className='bg-black Homepage'>
      <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
        <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
          <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use  nav-md'>

            <Link to='/Solutions' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Solutions</Link>
            <Link to='/Technology' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
            <Link to='/Partners' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Partners</Link>
            <Link to='/' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Prodigi</Link>
            <Link to='/About' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
            <Link to='/Carrers' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>carrers</Link>
            <div className='DropdDown'>
              <div className='DropDowntoggle'>
                <div className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Resources</div>
              </div>
              <nav className='navbartoggle'>
                <Link to='/Blogs' className='navlinks'>Blogs</Link>
                <Link to='/Newsroom' className='navlinks'>Newsroom</Link>
              </nav>
            </div>

            <Link to='/Contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>contact</Link>

          </nav>
        </div>
      </div>
      <div className='flex flex-col relative items-center justify-start overflow-hidden h-screen' style={{ zIndex: '0', top: '0' }}>
        <video autoPlay loop muted className=' w-full h-full m-auto absolute object-cover bg-cover inline-block align-baseline' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
          <source src={content.headervideo.localFile.url} type="video/mp4" />
        </video>
      </div>
      <div>

      </div>
      {/* unseen-container */}
      <div className='relative flex flex-col justify-center w-full items-center overflow-hidden unseen-container'>
        <div className='relative mr-auto ml-auto ' style={{ maxWidth: '1200px' }}>
          <div className='relative flex flex-col pl-4 pr-4 max-w-full z-10  second-content'>
            <div>
              <h2 className='text-slate-50 uppercase text-5xl mt-0 mb-0 font-semibold' style={{ lineHeight: '60px' }}>{content.unseentitle}</h2>
              <h1 className='text-slate-50 uppercase  max-w-full font-semibold mt-0 mb-0' style={{ letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{content.unseensubtitle}</h1>
            </div>

            <div className='max-w-full flex flex-col justify-center items-start secondDivContent'>
              <div className='max-w-full mt-10 container-content'>
                <p className='text-xl leading-8 mb-0 secondDivParaContent'>
                  <div dangerouslySetInnerHTML={{ __html: content.unseencontent.data.unseencontent }}></div>
                </p>
              </div>
              <button class="btn btn-2 hover-slide-up mt-7 uppercase">
                <span>{content.moreAboutUs}</span>
              </button>
            </div>
            <div className='flex flex-col justify-around items-center absolute' style={{ top: '0%', bottom: '0%', left: 'auto', right: '-34%' }}>
              <div className='relative'>
                <img src={content.unseenimg.localFile.url} onError={(e) => console.error('Image load error', e)} className=' h-auto inline-block align-middle  rotation-effect' style={{ width: '700px' }} alt='globeimage' />
                {/* <img src={content.unseenimg.localFile.url} className='max-w-full align-middle object-cover ' style={{ width: '264px', height: '171px', display: 'none', top: '456px', bottom: '0', left: '247px' }}></img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section(third division) */}
      <div className='bg-black mt-25 mb-20'>
        <div className='max-w-full flex justify-center ml-auto mr-auto'>
          <div className='flex max-w-full w-full justify-center bg-auto third-div-img' style={{ backgroundImage: `url(${content.aboutimg.localFile.url})` }}>
            <div className='flex flex-col align items-end'>
              <h1 className='uppercase mt-0 mb-0 font-normal font-barlow text-slate-50 ' style={{ fontSize: '50px', lineHeight: '60px', letterSpacing: '3px' }}>{content.abouttitle}</h1>
            </div>
            <div className='flex max-w-full flex-col items-start ml-6 justify-center' style={{ width: '482px' }}>
              <div className='max-w-full' style={{ width: '882px' }}>
                <p className='mb-0 mt-0 text-xl leading-8 font-barlow text-slate-50 third-div-content'><div dangerouslySetInnerHTML={{ __html: content.aboutcontent.data.aboutcontent }}></div></p>
              </div>
              <div className=' w-full max-w-full mt-7 flex'>
                <button class="btn btn-2 hover-slide-up uppercase">
                  <span>{content.LearnMore}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about container(fourth division) */}
      <div className='bg-black relative mt-60 pl-0 pr-0 overflow-hidden'>
        <div className='relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
          <div className='max-w-full relative ml-0 pl-4 pr-4 '>
            <h2 className='uppercase mt-0 mb-0 font-normal fourth-div-content text-slate-50' style={{ letterSpacing: '2px', fontFamily: '', fontSize: '50px', lineHeight: '60px' }}>{content.thirdsectitle}</h2>
            <h1 className='max-w-full uppercase mt-0 mb-0 font-normal text-slate-50' style={{ width: '1074px', fontSize: '80px', lineHeight: '100px', letterSpacing: '2px' }}>
              <span className='hyperspectral-text'>{content.rainbowtext}</span>
              {content.thirdsecsubtitle}
            </h1>
            <div className='max-w-full mt-20' style={{ marginLeft: '100px' }}>
              <p className='font-normal mb-0 mt-0 text-xl hyper-content text-slate-50' style={{ lineHeight: '32px', width: '72%' }}>
                <div dangerouslySetInnerHTML={{ __html: content.thirdseccontent.data.thirdseccontent }}></div>
              </p>
              <div className=' mt-20' style={{ width: '900px' }} >
                <div className='grid icons-grid'>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.thirdlogo1.localFile.childrenImageSharp[0].fixed.src} style={{ width: '50%' }} />
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name'>
                        {content.logo1title}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.logo2title.localFile.childrenImageSharp[0].fluid.src} style={{ width: '50%' }}></img>
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name'>
                        {content.logo2content.data.logo2content}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.logo3.localFile.childrenImageSharp[0].fluid.src} style={{ width: '50%', marginTop: '8px' }}></img>
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name' style={{ marginTop: '8px' }}>
                        {content.logo3content.data.logo3content}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.logo4title.localFile.childrenImageSharp[0].fluid.src} style={{ width: '50%' }}></img>
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name' style={{ marginTop: '-7px' }}>
                        {content.logo4content}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={content.thirdsecimg.localFile.childrenImageSharp[0].fluid.src} className=' inline-block max-w-full w-full object-cover'
          style={{ height: '499px', marginTop: '-211px' }}></img>
      </div>
      <div className='pt-60 pl-4 pr-4 overflow-hidden'>
        <div className='flex flex-col overflow-hidden items-start ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
          <div className='relative max-w-full' style={{ width: '1200px' }}>
            <h2 className='text-slate-50 uppercase mt-0 mb-0 font-normal fifth-div-sec'>{content.fourthtitle}</h2>
            <h1 className='max-w-full text-slate-50 uppercase mt-0 mb-0 font-normal fifth-div-sec-title'>
              <span className='hyperspectral-text'>{content.fourthrainbowtext}&nbsp;</span>
              {content.fourthsubtitle}
            </h1>
          </div>
          <div className='relative flex flex-col items-start mt-20 max-w-full' style={{ zIndex: '1', width: '1000px', marginLeft: '100px' }}>
            <div className='status-container justify-between grid max-w-full'>
              <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{content.fourthcard1title}</h5>
                <p className='uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard1content}</p>
              </div>
              <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{content.fourthcard2title}</h5>
                <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard2content}</p>
              </div>
              <div className='separator-effect'></div>
              <div className='separator-effect'></div>
              <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{content.fourthcard3title}</h5>
                <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard3content}</p>
              </div>
              <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{content.fourthcard4title}</h5>
                <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard4content}</p>
              </div>
            </div>
            <div className=' max-w-full flex' style={{ width: '1000px', marginTop: '50px' }}>
              <button class="btn btn-2 hover-slide-up uppercase">
                <span>{content.moreAboutTechnology}</span>
              </button>
            </div>
          </div>
          <div className='max-w-full flex' style={{ width: '1000px', marginTop: '50px' }}></div>
          <div className='relative flex w-full justify-center' style={{ marginTop: '60px', height: '459px' }}>
            <img src={content.sateliteimg.localFile.childrenImageSharp[0].fluid.src} className='max-w-full inline-block align-middle' style={{ width: '459px', height: '459px' }}></img>
          </div>
        </div>
      </div>
      {/* fifth section */}
      <div className='' style={{ padding: '240px 16px' }}>
        <div className='flex flex-col relative items-start justify-center ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
          <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '2px', fontSize: '50px', lineHeight: '60px', color: '#fff' }}>{content.fifthtitle}</h2>
          <div>
            <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '2px', fontSize: '80px', lineHeight: '100px', color: '#fff' }}> {content.fifthsubtitle}</h1>
          </div>
          <div className='max-w-full mt-20 relative' style={{ width: '1000px', marginLeft: '100px' }}>
            <div className='mb-10'>
              <p className='text-center text-xl mb-0 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', lineHeight: '38px' }}>{content.fifthcontent.data.fifthcontent}</p>
            </div>
            <div className='image'>
              <img src={content.fifthimg.localFile.childrenImageSharp[0].fluid.src} style={{ height: '553px', marginLeft: '76px' }}></img>
            </div>
          </div>
        </div>
      </div>
      {/* card hover section */}


      {/* card hover end section */}

      {/* sixth division */}
      <div className=' pl-4 pr-4' style={{ margin: '240px 0 0' }}>
        <div className=' ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
          <div className='max-w-full flex flex-col relative justify-between'>
            <div className='flex flex-col items-start'>
              <h2 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{content.sixthtitle}</h2>
              <h1 className=' max-w-full uppercase font-semibold mt-0 mb-0 font-use' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '100px', fontSize: '80px' }}>{content.sixthsubtitle}</h1>
            </div>
            <div className='flex justify-between' style={{ marginTop: '50px', marginLeft: '100px' }}>
              <div className='max-w-full flex flex-col items-start' style={{ width: '800px' }}>
                <div className=' w-full max-w-full' style={{ marginBottom: '30px' }}>
                  <p className=' text-xl mb-0 mt-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{content.sixthcontent.data.sixthcontent}</p>
                </div>
                <button class="btn btn-2 hover-slide-up uppercase mt-7">
                  <span>{content.askUs}</span>
                </button>
              </div>
            </div>
            <img src={content.sixthimg.localFile.childrenImageSharp[0].fluid.src} className='inline-block mt-20 max-w-full align-middle rounded-sm' style={{ width: '900px', marginLeft: '100px', border: '0' }}></img>
          </div>
        </div>
      </div>
      {/* seventh division */}
      <div className='flex flex-col items-center justify-center m-0 pt-60 overflow-hidden'>
        <div className='flex flex-col relative' style={{ width: '900px' }}>
          <div className='flex pl-0' style={{ borderLeft: '8px #00d4ff' }}>
            <div className='side-line-effects'></div>
            <div className='quote'>
              <h1 className='max-w-full w-full uppercase mt-0 mb-0 text-left font-semibold not-italic  font-quote ' style={{ color: '#fff', letterSpacing: '2px', fontSize: '40px', lineHeight: '46.88px' }}>{content.quote}</h1>
              <div className='uppercase mt-4 not-italic leading-10 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', fontSize: '24px' }}>{content.author}</div>
            </div>
          </div>
          <div className='max-w-full flex flex-col items-start' style={{ width: '670px', marginTop: '60px', marginLeft: '140px' }}>
            <p className=' text-xl leading-8 mb-0 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
              <div dangerouslySetInnerHTML={{ __html: content.quotecontent.data.quotecontent }}></div>
            </p>
            <div className=' mt-10'>
              <button class="btn btn-2 hover-slide-up uppercase">
                <span>{content.futureWith}</span>
              </button>
            </div>
          </div>
        </div>
        <div className='vision-img-container'>
          <img src={content.quoteimg.localFile.childrenImageSharp[0].fluid.src} className='object-cover max-w-full inline-block align-middle mt-0 w-screen h-full' style={{ color: '#e4e3e3', zIndex: '-2', border: '0' }}></img>
        </div>
      </div>
      {/* eighth division */}
      <div className='news-recents'>
        <div className='flex flex-col relative items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
          <div className='w-full flex items-end justify-between' style={{ maxWidth: '1078px' }}>
            <div className=' box-border'>
              <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{content.newstitle}</h2>
              <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{content.newssubtitle}</h1>
            </div>
            <div className=' mb-5 more-from-news-button'>
              <button class="btn btn-2 hover-slide-up uppercase">
                <span>{content.aboutMedia}</span>
              </button>
            </div>
          </div>
          <div className='flex max-w-full mt-20 justify-between' style={{ width: '1000px', marginLeft: '100px' }}>
            <Link className='inline-block uppercase text-lg max-w-full' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px', border: '1px solid #000', textDecoration: 'none' }}>
              <div className=' pt-5 pl-5 pr-5' style={{ width: '484px', height: '271px', backgroundColor: '#19191a' }}>
                <div className='flex items-start justify-between mb-10'>
                  <img src={content.newslogo[1].localFile.url} className='max-w-full inline-block align-middle' style={{ border: '0', height: '30px' }}></img>
                  <div className='uppercase text-xs font-use-one' style={{ color: 'rgba(255, 255, 255, .8)', lineHeight: '15px' }}>{content.newscards[0].date}</div>
                </div>
                <p className='mt-0 mb-0 normal-case font-use-one' style={{ color: 'rgba(255, 255, 255, .95)', fontSize: '28px', lineHeight: '38px' }}>
                  {content.newscards[0].newscontent.data.newscontent}
                </p>
              </div>
            </Link>
            <Link className='inline-block uppercase text-lg max-w-full' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px', border: '1px solid #000', textDecoration: 'none' }}>
              <div className=' pt-5 pl-5 pr-5' style={{ width: '484px', height: '271px', backgroundColor: '#19191a' }}>
                <div className='flex items-start justify-between mb-14'>
                  <img src={content.newslogo[0].localFile.url} className='max-w-full w-20 inline-block align-middle' style={{ border: '0', height: '40px', opacity: '.85' }}></img>
                  <div className='uppercase text-xs font-use-one' style={{ color: 'rgba(255, 255, 255, .8)', lineHeight: '15px' }}>{content.newscards[1].date}</div>
                </div>
                <p className='mt-0 mb-0 normal-case font-use-one' style={{ color: 'rgba(255, 255, 255, .95)', fontSize: '28px', lineHeight: '38px' }}>
                  <strong className=' font-normal'>{content.newscards[1].newscontent.data.newscontent}</strong>
                </p>
              </div>
            </Link>
          </div>
        </div>

      </div>

      {/* footer section */}

      <div className='footer section'>
        <div className='relative ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
          <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8' style={{ marginTop: '101px', border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
            <div className='flex flex-col items-start'>
              <div className='uppercase font-semibold font-use' style={{ color: 'rgba(255, 255, 255, .85) ', lineHeight: '48px', fontSize: '40px' }}>{content.footertitle}</div>
              <p className=' text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', width: '441px', marginTop: '30px', marginBottom: '30px' }}>{content.footerleftcontent.data.footerleftcontent}</p>
              <button class="btn btn-2 hover-slide-up uppercase">
                <span>{content.getInTouch}</span>
              </button>
              <div className='social-platform font-use'>
                <Link to="https://www.facebook.com/5cnetwork" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={content.footerlogo1.localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={content.footerlogo2.localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
                <Link to="https://twitter.com/5c_network" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={content.footerlogo3.localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
                <Link to="https://medium.com/pixxel-labs" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={content.footerlogo4.localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
              </div>
            </div>

            <div className='flex'>

              <div className='flex flex-col font-use' style={{ marginLeft: '60px' }}>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>solutions</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>blogs</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>newsroom</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>annual returns</Link>

              </div>


              <div className='flex flex-col font-use' style={{ marginLeft: '60px' }}>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>vision</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>carrers</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>contact</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>privacy policy</Link>

              </div>

            </div>

          </div>
        </div>

        <div className='relative flex flex-row items-end mt-0 overflow-hidden' style={{ color: '#fff', height: '400px' }}>
          <video autoPlay loop muted className=' w-full h-full absolute m-auto object-cover bg-cover inline-block align-baseline ' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
            <source src={content.footervideo.localFile.url} type="video/mp4" />
          </video>
        </div>
      </div>

    </div>

  )
}

export default index

export const pageQuery = graphql`
query MyQuery {
    allStrapiHomepage {
      nodes {
        headervideo {
          localFile {
            url
          }
        }
        unseentitle
        unseensubtitle
        unseencontent {
          data {
            unseencontent
          }
        }
        unseenimg {
          localFile {
            url
          }
        }
        abouttitle
        aboutcontent {
          data {
            aboutcontent
          }
        }
        aboutimg {
            localFile {
              url
            }
          }
        thirdsectitle
        thirdsecsubtitle
        thirdseccontent {
          data {
            thirdseccontent
          }
        }
        thirdlogo1 {
          localFile {
            childrenImageSharp {
              fixed {
                src
              }
            }
          }
        }
        logo1title
        logo2title {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        logo2content {
          data {
            logo2content
          }
        }
        logo3 {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        logo3content {
          data {
            logo3content
          }
        }
        logo4title {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        logo4content
        thirdsecimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        rainbowtext
        fourthtitle
        fourthrainbowtext
        fourthsubtitle
        fourthcard1title
        fourthcard1content
        fourthcard2title
        fourthcard2content
        fourthcard3title
        fourthcard3content
        fourthcard4title
        fourthcard4content
        sateliteimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        fifthtitle
        fifthsubtitle
        fifthcontent {
          data {
            fifthcontent
          }
        }
        fifthimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        sixthtitle
        sixthsubtitle
        sixthcontent {
          data {
            sixthcontent
          }
        }
        sixthimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        quote
        author
        quotecontent {
          data {
            quotecontent
          }
        }
        quoteimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        newstitle
        newssubtitle
        newscards {
          date
          newscontent {
            data {
              newscontent
            }
          }
        }
        footertitle
        footerleftcontent {
          data {
            footerleftcontent
          }
        }
        footerlogo1 {
          localFile {
            url
          }
        }
        footerlogo2 {
          localFile {
            url
          }
        }
        footerlogo3 {
          localFile {
            url
          }
        }
        footerlogo4 {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        newslogo {
            localFile {
              url
            }
          }
          moreAboutUs
          LearnMore
          moreAboutTechnology
          askUs
          futureWith
          aboutMedia
          getInTouch
      }
    }
  }
`