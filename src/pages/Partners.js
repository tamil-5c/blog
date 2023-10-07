import React from 'react'
import { Link, graphql } from 'gatsby'
import Marquee from 'react-fast-marquee'


function Partners({ data }) {
    const strapiContent = data.allStrapiPartner.nodes[0];

    return (
        <div className=' bg-black Homepage'>
            <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent nav-division' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
                <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
                    <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use nav-md'>
                        <Link to='/Solutions' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Solutions</Link>
                        <Link to='/Technology' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
                        <Link to='/Partners' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Partners</Link>
                        <Link to='/' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Prodigi</Link>
                        <Link to='/About' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
                        <Link to='/Carrers' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Carrers</Link>
                        <div className='DropdDown'>
                            <div className='DropDowntoggle'>
                                <div className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Resources</div>
                            </div>
                            <nav className='navbartoggle'>
                                <Link to='/Blogs' className='navlinks'>Blogs</Link>
                                <Link to='/Newsroom' className='navlinks'>Newsroom</Link>
                            </nav>
                        </div>
                        <Link to='Contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Contact</Link>
                    </nav>
                </div>
            </div>
            {/* Mobile responsive */}
<nav role="navigation" className='mobile-nav'>
  <div id="menuToggle">
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <li><Link to="/Solutions">Solutions</Link></li>
      <li><Link to="/Technology">Technology</Link></li>
      <li><Link to="/Partners">Partners</Link></li>
      <li><Link to="/">Prodigi</Link></li>
      <li><Link to="/About">About</Link></li>
      <li class="">
        <div tabindex="0" class="onclick-menu">Resources
          <ul class="onclick-menu-content">
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/Newsroom">Newsroom</Link></li>
          </ul>
        </div>
      </li>
      <li><Link to="/Carrers">Careers</Link></li>
      <li><Link to="/Contact" target="_blank">contact</Link></li>
    </ul>
  </div>
</nav>
            <div className='partners-home' style={{ backgroundImage: `linear-gradient(135deg, #000 34%, rgba(255, 255, 255, 0)), url(${strapiContent.partnerimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto'>
                    <div className=' max-w-full relative w-[1200px] mt-[234px] sm:mt-[6rem] sm:ml-[10px]'>
                        <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold font-use tracking-[2px] text-[#fff] text-[80px] leading-[100px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
                        <div className='max-w-full mt-8 w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
                            <p className='mb-0 mt-0 leading-8  font-use font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>
                                {strapiContent.content.data.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '120px' }}> 
                <div className=' relative flex flex-col items-start ml-auto mr-auto sm:max-w-full' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <div className=' mt-8 w-[800px] ml-[100px] sm:max-w-full sm:ml-0'>
                        <p className=' mb-6 mt-0 font-use-one sm:max-w-full sm:ml-1.5' style={{ lineHeight: '150%', fontSize: '20px', width: '640px', color: 'rgba(255, 255, 255, .85)' }}>
                            {strapiContent.seccontent.data.seccontent}
                        </p>
                    </div>
                </div>
            </div>
            <div className=' pl-4 pr-4 overflow-hidden mt-[240px] sm:mt-[150px]'>
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <div>
                        <h2 className='uppercase mt-0 mb-0 font-semibold text-[#fff] leading-[60px] text-[50px] tracking-[2px]  font-use sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.thirdtitle}</h2>
                        <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold text-[#fff] leading-[100px] text-[80px] tracking-[2px] sm:text-[2.5rem] sm:leading-[50px] sm:ml-[10px]'>{strapiContent.thirdsubtitle}</h2>
                    </div>
                    <div className='flex flex-col mt-8 items-start w-[800px] ml-[100px] sm:ml-0 sm:max-w-full'>
                        <p className=' mb-6 leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}></p>
                        <ul className=' w-full h-full max-w-full justify-between mt-0 mb-0 ml-0 flex relative pl-0 flex-col max-h-none'>
                            <li className=' w-full max-w-full items-start mb-8 pl-0  flex'>
                                <div className='bullet-line-css'></div>
                                <p className=' mb-0 leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }} >
                                    {strapiContent.thirdpoint1.data.thirdpoint1}
                                </p>
                            </li>
                            <li className=' w-full max-w-full items-start mb-8 pl-0  flex'>
                                <div className='bullet-line-css'></div>
                                <p className=' mb-0 leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }} >
                                    {strapiContent.thirdpoint2.data.thirdpoint2}
                                </p>
                            </li>
                            <li className=' w-full max-w-full items-start mb-8 pl-0  flex'>
                                <div className='bullet-line-css'></div>
                                <p className=' mb-0 leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }} >
                                    {strapiContent.thirdpoint3.data.thirdpoint3}
                                </p>
                            </li>
                            <li className=' w-full max-w-full items-start mb-8 pl-0  flex'>
                                <div className='bullet-line-css'></div>
                                <p className=' mb-0 leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }} >
                                    {strapiContent.thirdpoint4.data.thirdpoint4}
                                </p>
                            </li>
                            <li className=' w-full max-w-full items-start mb-8 pl-0  flex'>
                                <div className='bullet-line-css'></div>
                                <p className=' mb-0 leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }} >
                                    {strapiContent.thirdpoint5.data.thirdpoint5}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px', marginTop: '160px' }}>
                    <div>
                        <h2 className='uppercase mt-0 mb-0 font-semibold font-use text-[#fff] leading-[60px] text-[50px] tracking-[2px]  font-use sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.mqtitle}</h2>
                        <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use text-[#fff] leading-[100px] text-[80px] tracking-[2px] sm:text-[2.5rem] sm:leading-[29px] sm:ml-[10px]'>{strapiContent.mqsubtitle}</h2>
                    </div>
                    <div className='w-full mt-[60px] ml-[100px] max-w-[1000px] sm:ml-[10px]'>
                        <div className=' flex flex-row justify-start items-start overflow-hidden'>
                            <Marquee direction="left" speed={100} delay={2}>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[0].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[1].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[2].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[3].localFile.url} alt="" />
                                </div>
                                <div>
                                    <img src={strapiContent.mqlogo1[4].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[5].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[6].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[7].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.mqlogo1[8].localFile.url} alt="" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
                <div className=' h-full text-center clear-both relative card-partners mt-[230px] bg-[black] sm:mt-[150px]'>
                    <div className=' overflow-visible h-full block relative whitespace-nowrap' style={{ zIndex: '1', left: '0', right: '0' }}>
                        <div className='w-full max-w-full ml-0 mr-0 static align-top h-full whitespace-normal text-left inline-block' style={{ opacity: '1', transform: 'translateX(0px)' }}>
                            <div className='w-full max-w-full justify-center items-center flex'>
                                <div className='partners-card grid-cols-2 sm:grid-cols-1'>
                                    <div className=' w-full h-auto max-w-full max-h-full flex flex-col justify-center items-start ml-0 mr-0' style={{ minWidth: 'auto', backgroundColor: '#313336', border: '1px solid #45484c', padding: '60px 40px' }}>
                                        <div className='h-auto block'>
                                            <p className='mb-0 text-xl leading-8 mt-0 italic font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.aboutcard[0].content.data.content}</p>
                                        </div>
                                        <div className=' flex' style={{ marginTop: '60px' }}>
                                            <div style={{ width: '73px', height: '73px', borderRadius: '73px' }}>
                                                <img src={strapiContent.avatar[1].localFile.url} className=' w-full h-full max-w-full inline-block align-middle' style={{ borderRadius: '73px' }}></img>
                                            </div>
                                            <div className='flex flex-col ml-3'>
                                                <div className='uppercase' style={{ color: '#00d4ff', lineHeight: '16.8px' }}>{strapiContent.aboutcard[0].title}</div>
                                                <div className=' leading-7 text-lg' style={{ color: '#fff' }}>{strapiContent.aboutcard[0].name}</div>
                                                <div className=' leading-7 text-lg' style={{ color: 'rgba(255, 255, 255, .5)' }}> {strapiContent.aboutcard[0].position}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-full h-auto max-w-full max-h-full flex flex-col justify-center items-start ml-0 mr-0' style={{ minWidth: 'auto', backgroundColor: '#313336', border: '1px solid #45484c', padding: '60px 40px' }}>
                                        <div className='h-auto block'>
                                            <p className='mb-0 text-xl leading-8 mt-0 italic font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.aboutcard[1].content.data.content}</p>
                                        </div>
                                        <div className=' flex' style={{ marginTop: '60px' }}>
                                            <div style={{ width: '73px', height: '73px', borderRadius: '73px' }}>
                                                <img src={strapiContent.avatar[0].localFile.url} className=' w-full h-full max-w-full inline-block align-middle' style={{ borderRadius: '73px' }}></img>
                                            </div>
                                            <div className='flex flex-col ml-3'>
                                                <div className='uppercase' style={{ color: '#00d4ff', lineHeight: '16.8px' }}>{strapiContent.aboutcard[0].title}</div>
                                                <div className=' leading-7 text-lg' style={{ color: '#fff' }}>{strapiContent.aboutcard[0].name}</div>
                                                <div className=' leading-7 text-lg' style={{ color: 'rgba(255, 255, 255, .5)' }}>{strapiContent.aboutcard[0].position}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[100px] mb-[130px]'>
                <div className=' max-w-full justify-center flex ml-auto mr-auto sm:w-[93%]'>
                    <div className=' w-full justify-center flex  partner-now' style={{ backgroundImage: `url(${strapiContent.footerpartnerimg.localFile.url})` }}>
                        <div className='flex flex-col items-center'>
                            <h2 className=' max-w-full uppercase mt-0 mb-0 font-semibold text-center  font-use text-[#fff] leading-[60px] text-[50px] tracking-[2px]  font-use sm:ml-[10px] sm:text-[25px] sm:tracking-[1px]'>{strapiContent.partnernow}</h2>
                            <button className="btn btn-2 hover-slide-up mt-7">
                                <span>{strapiContent.git}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section */}
            <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase font-semibold font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{strapiContent.footertitle}</div>
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] mb-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{strapiContent.footercontent.data.footercontent}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up sm:w-[100%]">
                                <span>{strapiContent.git}</span>
                            </button>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <Link to="https://www.facebook.com/5cnetwork" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.facebook.localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.linkedin.localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.twitter.localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://medium.com/pixxel-labs" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.medium.localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                            </div>
                        </div>
                        <div className='flex sm:mt-[65px] sm:w-[100%] sm:justify-between'>
                            <div className='flex flex-col font-use ml-[60px] sm:ml-[5px]'>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>solutions</Link>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>blogs</Link>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>newsroom</Link>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>annual returns</Link>

                            </div>
                            <div className='flex flex-col font-use ml-[60px]'>
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
                        <source src={strapiContent.footervideo.localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Partners

export const pageQuery = graphql`
query MyQuery {
    allStrapiPartner {
      nodes {
        title
        content {
          data {
            content
          }
        }
        partnerimg {
          localFile {
            url
          }
        }
        seccontent {
          data {
            seccontent
          }
        }
        thirdtitle
        thirdsubtitle
        thirdpoint1 {
          data {
            thirdpoint1
          }
        }
        thirdpoint2 {
          data {
            thirdpoint2
          }
        }
        thirdpoint3 {
          data {
            thirdpoint3
          }
        }
        thirdpoint4 {
          data {
            thirdpoint4
          }
        }
        thirdpoint5 {
          data {
            thirdpoint5
          }
        }
        mqtitle
        mqsubtitle
        mqlogo1 {
          localFile {
            url
          }
        }
        partnernow
        footerpartnerimg {
          localFile {
            url
          }
        }
        footertitle
        footercontent {
          data {
            footercontent
          }
        }
        facebook {
          localFile {
            url
          }
        }
        twitter {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        linkedin {
          localFile {
            url
          }
        }
        medium {
          localFile {
            url
          }
        }
        aboutcard {
          content {
            data {
              content
            }
          }
          title
          name
          position
        }
        avatar {
            localFile {
              url
            }
          }
          git
      }
    }
  }
`
