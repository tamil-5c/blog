import React from 'react'
import { Link, graphql } from 'gatsby'
import Marquee from 'react-fast-marquee'


function Partners({ data }) {
    const strapiContent = data.allStrapiPartner.nodes[0];

    return (
        <div className=' bg-black Homepage'>
            <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
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
            <div className='partners-home' style={{ backgroundImage: `linear-gradient(135deg, #000 34%, rgba(255, 255, 255, 0)), url(${strapiContent.partnerimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto'>
                    <div className=' max-w-full relative' style={{ width: '1200px', marginTop: '234px' }}>
                        <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ letterSpacing: '2px', color: '#fff', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.title}</h1>
                        <div style={{ marginLeft: '100px', width: '500px' }} className='max-w-full mt-8'>
                            <p className='mb-0 mt-0 leading-8  font-use font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>
                                {strapiContent.content.data.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '120px' }}>
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <div className=' mt-8' style={{ width: '800px', marginLeft: '100px' }}>
                        <p className=' mb-6 mt-0 font-use-one' style={{ lineHeight: '150%', fontSize: '20px', width: '640px', color: 'rgba(255, 255, 255, .85)' }}>
                            {strapiContent.seccontent.data.seccontent}
                        </p>
                    </div>
                </div>
            </div>
            <div className=' pl-4 pr-4 overflow-hidden' style={{ marginTop: '240px' }}>
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <div>
                        <h2 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', lineHeight: '60px', fontSize: '50px', letterSpacing: '2px' }}>{strapiContent.thirdtitle}</h2>
                        <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.thirdsubtitle}</h2>
                    </div>
                    <div className='flex flex-col mt-8 items-start' style={{ width: '800px', marginLeft: '100px' }}>
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
                        <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{strapiContent.mqtitle}</h2>
                        <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.mqsubtitle}</h2>
                    </div>
                    <div className='w-full' style={{ marginTop: '60px', marginLeft: '100px', maxWidth: '1000px' }}>
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
                <div className=' h-full text-center clear-both relative card-partners' style={{ backgroundColor: 'black', marginTop: '230px' }}>
                    <div className=' overflow-visible h-full block relative whitespace-nowrap' style={{ zIndex: '1', left: '0', right: '0' }}>
                        <div className='w-full max-w-full ml-0 mr-0 static align-top h-full whitespace-normal text-left inline-block' style={{ opacity: '1', transform: 'translateX(0px)' }}>
                            <div className='w-full max-w-full justify-center items-center flex'>
                                <div className='partners-card'>
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
            <div style={{ marginTop: '100px', marginBottom: '130px' }}>
                <div className=' max-w-full justify-center flex ml-auto mr-auto'>
                    <div className=' w-full justify-center flex  partner-now' style={{ backgroundImage: `url(${strapiContent.footerpartnerimg.localFile.url})` }}>
                        <div className='flex flex-col items-center'>
                            <h2 className=' max-w-full uppercase mt-0 mb-0 font-normal  font-use' style={{ fontSize: '50px', lineHeight: '60px', color: '#fff', letterSpacing: '2px' }}>{strapiContent.partnernow}</h2>
                            <button className="btn btn-2 hover-slide-up mt-7">
                                <span>{strapiContent.git}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section */}
            <div className='footer section'>
                <div className='relative ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8' style={{ marginTop: '101px', border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase font-semibold font-use' style={{ color: 'rgba(255, 255, 255, .85) ', lineHeight: '48px', fontSize: '40px' }}>{strapiContent.footertitle}</div>
                            <p className=' text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', width: '441px', marginTop: '30px', marginBottom: '30px' }}>{strapiContent.footercontent.data.footercontent}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up">
                                <span>{strapiContent.git}</span>
                            </button>
                            <div className='social-platform font-use'>
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
