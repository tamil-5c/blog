import React from 'react'
import { Link, graphql } from 'gatsby'
import Marquee from 'react-fast-marquee'
import Img from 'gatsby-image';

function About({ data }) {
    const strapiContent = data.allStrapiAbout.nodes[0]

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
            <div className='about-home  sm:h-[80vh]' style={{ backgroundImage: `url(${strapiContent.abouthomeimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto sm:ml-[10px]'>
                    <div className='max-w-full relative w-[1200px] mt-[234px] sm:mt-24'>
                        <h1 className=' uppercase max-w-full mt-0 mb-0 font-semibold font-use text-[#fff] tracking-[2px] leading-[100px] text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
                        <div className=' max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
                            <p className=' mt-0 mb-0 leading-8 font-use-one sm:text-base text-[20px]' style={{color: 'rgba(255, 255, 255, .85)' }}>
                                {strapiContent.content.data.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='passion sm:pt-28 sm:pb-[130px]' style={{ backgroundImage: `url(${strapiContent.secimg.localFile.url})` }}>
                <div className='flex flex-col items-start relative ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <h1 className=' uppercase mt-0 mb-0 font-semibold font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.sectitle}</h1>
                    <h1 className=' uppercase max-w-full mt-0 mb-0 font-semibold font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[34px] sm:leading-[50px] sm:ml-[10px]' style={{width: '1000px' }}>{strapiContent.secsubtitle}</h1>
                    <div className='max-w-full ml-[100px] mt-[50px] w-[800px] sm:ml-[10px] sm:w-[96%]'>
                        <p className=' mt-0 mb-0 leading-8 font-use-one' style={{ fontSize: '20px', color: 'rgba(255, 255, 255, .85)' }}>
                            {strapiContent.secpara.data.secpara}
                        </p>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden mt-40 sm:mt-20' >
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: 1, maxWidth: '1200px' }}>
                    <h1 className=' uppercase mt-0 mb-0 font-semibold font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.leadertitle}</h1>
                    <div className='card-layout-container'>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[2].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[0].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[0].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className='text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[0].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[0].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[1].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[1].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[1].position} </div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[1].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[2].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[2].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[2].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[5].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[3].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[3].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[3].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[3].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[4].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[4].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[4].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[4].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[5].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[5].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[5].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[8].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[6].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[6].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[6].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[6].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[7].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[7].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[7].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[7].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[8].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[8].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[8].position}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: 1, maxWidth: '1200px' }}>
                    <h1 className=' uppercase mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{strapiContent.advtext}</h1>
                    <div className='card-layout-container sm:mb-8'>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[0].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[0].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[0].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[2].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[1].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[1].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[1].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[2].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[2].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[3].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8 font-semibold mb-0 uppercase font-use' style={{ marginTop: '-19px', color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[3].firstname}</h3>
                                        <h3 className=' text-2xl leading-8 font-semibold mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[3].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col items-start ml-auto mr-auto mt-[20px] mb-[180px] ' style={{ zIndex: '1', maxWidth: '1200px'}}>
                    <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use text-[50px] sm:text-xl sm:ml-3' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '100px' }}>{strapiContent.partners}</h2>
                    <div className='w-full ml-[100px] mt-[60px] sm:mt-6 sm:ml-0' style={{ marginTop: '60px', maxWidth: '1000px' }}>
                        <div className=' flex flex-row justify-start items-start overflow-hidden'>
                            <Marquee direction="left" speed={100} delay={2}>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[0].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[1].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[2].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[3].localFile.url} alt="" />
                                </div>
                                <div>
                                    <img src={strapiContent.partnersmq[4].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[5].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[6].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[7].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[8].localFile.url} alt="" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mb-60 relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use text-[50px] sm:text-xl sm:ml-3' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '60px' }}>partners</h2>
                <div className='w-full' style={{ maxWidth: '1000px', marginTop: '60px', marginLeft: '100px' }}>
                    <div className='logos-container'>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[0].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[1].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[2].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[3].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[4].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[5].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[6].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[7].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[8].localFile.url}></img>
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
                                <span>{strapiContent.getInTouch}</span>
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

export default About

export const pageQuery = graphql`
query MyQuery {
    allStrapiAbout {
      nodes {
        title
        content {
          data {
            content
          }
        }
        abouthomeimg {
          localFile {
            url
          }
        }
        sectitle
        secsubtitle
        secpara {
          data {
            secpara
          }
        }
        secimg {
          localFile {
            url
          }
        }
        leadertitle
        leadershipcards {
          firstname
          lastname
          position
        }
        advtext
        advisiorcard {
          firstname
          lastname
        }
        partners
        partnersmq {
          localFile {
            url
          }
        }
        partnerslogo {
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
        leadershipcardsimg {
          localFile {
            url
          }
        }
        advisorcardimg {
          localFile {
            url
          }
        }
        getInTouch
      }
    }
  }
`
