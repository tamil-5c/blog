import React from 'react'
import { Link, graphql } from 'gatsby'

function Contact({ data }) {
    const strapiContent = data.allStrapiContact.nodes[0];

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
                        <Link to='/Contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Contact</Link>
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
      <li><Link to="/Contact" target="_blank">contact</Link></li>
    </ul>
  </div>
</nav>
            <div className='Contact-page' style={{ backgroundImage: `url(${strapiContent.contactimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto'>
                    <div className='max-w-full relative mt-[234px] w-[1200px] sm:mt-28'>
                        <h1 className=' uppercase max-w-full mt-0 mb-0 font-semibold font-use text-[#fff] tracking-[2px] leading-[100px] sm:ml-1 text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
                        <div className=' max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
                            <p className=' mt-0 mb-0 leading-8 font-use-one font-semibold sm:text-xl text-[20px]' style={{color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.titlecontent.data.titlecontent}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className='flex flex-col relative items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }} >
                    <h2 className='uppercase mt-0 mb-0 font-semibold  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:leading-10 sm:text-[22px] sm:tracking-[1px]'>{strapiContent.sectitle}</h2>
                    <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:leading-10 sm:ml-[10px] sm:text-[28px] sm:tracking-[1px]'>{strapiContent.secsubtitle}</h2>
                    <div className='contact-link'>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[0].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold text-[30px] sm:text-[20px]' style={{ lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[0].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[2].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold text-[30px] sm:text-[20px]' style={{lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[1].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[4].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold text-[30px] sm:text-[20px]' style={{  lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[2].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[3].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold text-[30px] sm:text-[20px]' style={{  lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[3].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[1].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold text-[30px] sm:text-[20px]' style={{ lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[4].title}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mt-[220px] mb-[200px] sm:mt-28' >
                <div className='relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <h2 className='uppercase mt-0 mb-0 font-semibold  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.loctitle}</h2>
                    <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:tracking-[1px] sm:text-[38px] sm:leading-[50px] sm:ml-[10px]'>{strapiContent.locsubtitle}</h2>
                    <div className='flex mt-20 justify-between w-[1020px] ml-[100px] sm:flex-col sm:ml-[10px] sm:w-full'>
                        <div className='w-auto flex sm:mb-14'>
                            <div>
                                <img src={strapiContent.locationlogo.localFile.url} className='max-w-full inline-block align-middle' style={{ width: '50px', height: '50px' }}></img>
                            </div>
                            <div className='w-auto max-w-full'>
                                <div className='uppercase' style={{ letterSpacing: '2px', fontSize: '40px', lineHeight: '48px', color: '#fff' }}>{strapiContent.locations[0].country}</div>
                                <p className=' mt-3 mb-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[0].address.data.address }}></div>
                                </p>
                            </div>
                        </div>
                        <div className=' flex w-[480px] sm:w-full'>
                            <div>
                                <img src={strapiContent.locationlogo.localFile.url} className='max-w-full inline-block align-middle' style={{ width: '50px', height: '50px' }}></img>
                            </div>
                            <div className='w-auto max-w-full'>
                                <div className='uppercase' style={{ letterSpacing: '2px', fontSize: '40px', lineHeight: '48px', color: '#fff' }}>{strapiContent.locations[1].country}</div>
                                <p className=' mt-3 mb-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[1].address.data.address }}></div>
                                </p>
                            </div>
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
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] mb-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{strapiContent.footercontent}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up sm:w-[100%]">
                                <span>{strapiContent.getintouch}</span>
                            </button>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <Link to="https://www.facebook.com/5cnetwork" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[0].localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[2].localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[1].localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://medium.com/pixxel-labs" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[3].localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
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

export default Contact

export const pageQuery = graphql`
query MyQuery {
    allStrapiContact {
      nodes {
        title
        contactimg {
          localFile {
            url
          }
        }
        titlecontent {
          data {
            titlecontent
          }
        }
        sectitle
        secsubtitle
        help {
          title
        }
        helpimg {
          localFile {
            url
          }
        }
        loctitle
        locsubtitle
        locations {
          country
          address {
            data {
              address
            }
          }
        }
        footertitle
        footercontent
        socialplatform {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        locationlogo {
          localFile {
            url
          }
        }
        getintouch
      }
    }
  }
`