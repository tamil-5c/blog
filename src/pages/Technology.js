import React from 'react'
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';


function Technology({ data }) {
  const strapiContent = data.allStrapiTechnology.nodes[0];

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
                <div className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold ' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Resources</div>
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
      <div className=' h-screen flex flex-col justify-start items-center bg-no-repeat technology-hero sm:h-[80vh] ' style={{ backgroundImage: `url(${strapiContent.titleimg.localFile.url})` }}>
        <div className=' max-w-full ml-auto mr-auto'>
          <div className='max-w-full relative w-[1200px] mt-[234px] sm:mt-[6rem] sm:ml-[10px]'>
            <h1 className='max-w-full uppercase mt-0 mb-0 font-medium font-use text-[#fff] tracking-[2px] leading-[100px] text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
            <div className='max-w-full mt-10 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
              <p className='mb-0 text-xl mt-0 leading-8  font-use-one sm:text-base'>{strapiContent.content.data.content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-60 sm:mt-2'>
        <div className='max-w-full flex justify-center items-center ml-auto mr-auto'>
          <div className='max-w-full relative w-[1200px]'>
            <h2 className='uppercase mt-0 mb-0 font-semibold  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.secondtitle}</h2>
            <h2 className='max-w-full uppercase mt-0 mb-0 font-light font-use-one text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[2.5rem] sm:leading-[50px] sm:ml-[10px]'> {strapiContent.secondsubtitle}</h2>
            <p className=' mb-0 text-xl leading-8 font-use-one w-[700px] mt-[50px] ml-[100px] sm:ml-[10px] sm:text-base sm:w-[83%]' style={{color: 'rgba(255, 255, 255, .85)' }}>
              <div dangerouslySetInnerHTML={{ __html: strapiContent.secondcontent.data.secondcontent }}></div>
            </p>
            <div className=' w-full max-w-full justify-center flex relative mt-[104px]'>
              <img src={strapiContent.secondimg.localFile.url} className='h-auto object-fill max-w-full inline-block align-middle w-[800px] '></img>
            </div>
            <div className=' w-full justify-between items-center flex relative mt-[60px] sm:mt-[5px] sm:flex-col'>
              <div className='max-w-full w-[430px] ml-[100px] sm:ml-[5px]'>
                <ul className='max-w-full flex flex-col pl-0 justify-between mt-0 w-[400px] h-[250px] mb-[10px]'>
                  <li className='w-full max-w-full flex items-start mb-8 pl-0'>
                    <div className='bullet-line-css'></div>
                    <p className='mb-0 text-xl leading-8 mt-0 font-use-one sm:text-base' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.secondpoint1.data.secondpoint1}</p>
                  </li>
                  <li className='w-full max-w-full flex items-start mb-8 pl-0'>
                    <div className='bullet-line-css'></div>
                    <p className='mb-0 text-xl leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.secondpoint2.data.secondpoint2}</p>
                  </li>
                </ul>
              </div>
              <div className='sm:mt-5 sm:w-full'>
                <img src={strapiContent.secondpointsimg.localFile.url} className='object-cover max-w-full inline-block align-middle w-[617px] h-[345px] sm:object-contain'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[208px] sm:mt-3 sm:ml-[10px]'>
        <div className=' relative flex items-start flex-col ml-auto mr-auto max-w-[1200px] z-[1]'>
          <div>
            <h2 className=' uppercase mt-0 mb-0 font-semibold  font-use leading-[60px] text-[50px] text-[#fff] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.rgbtitle}</h2>
            <h2 className=' max-w-full uppercase mt-0 mb-0 font-semibold  font-use leading-[100px] text-[#fff] text-[80px] sm:text-[34px] sm:leading-10 sm:tracking-[1px]'>{strapiContent.rgbsubtitle}</h2>
          </div>
          <div className=' w-full max-w-full mt-12'>
            <img className=' max-w-full inline-block align-middle' src={strapiContent.rgbimg.localFile.url}></img>
          </div>
        </div>
      </div>
      <div className=' pl-4 pr-4 mt-60 sm:mt-[50px]'>
        <div className='flex flex-col relative items-start  ml-auto mr-auto z-[1] max-w-[1200px]'>
          <h2 className='uppercase mt-0 mb-0 font-semibold font-use tracking-[2px] text-[50px] leading-[60px] text-[#fff] sm:text-[22px] sm:leading-10 sm:tracking-[1px] '>{strapiContent.thirdtitle}</h2>
          <h2 className='uppercase mt-0 mb-0 font-semibold max-w-full  font-use text-[#fff] tracking-[2px] text-[80px] leading-[100px] sm:text-[2.5rem] sm:leading-10'>{strapiContent.thirdsubtitle}</h2>
          <div className='w-[700px] mt-[60px] ml-[100px] sm:ml-[10px] sm:w-full'>
            <p className='mb-0 leading-8 text-xl mt-0  font-use-one sm:text-[18px]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
              {strapiContent.thirdcontent.data.thirdcontent}
            </p>
          </div>
          <div className='flex relative justify-center'>
            <img className=' inline-block max-w-full align-middle' src={strapiContent.thirdimg.localFile.url}></img>
          </div>
          <div className='w-full max-w-full'>
            <div className='flex justify-between stats-card'>
              <div className='max-w-full' style={{ width: '351px' }}>
                <h3 className=' font-semibold leading-9 text-3xl uppercase mt-0 mb-0 font-use sm:text-[24px]' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard1title}</h3>
                <p className='mb-0 text-xl leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard1content}</p>
              </div>
              <div className=' separator-effect-md'></div>
              <div className=' max-w-full' style={{ width: '400px' }}>
                <h3 className=' font-semibold leading-9 text-3xl uppercase mt-0 mb-0 font-use sm:text-[24px]' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard2title}</h3>
                <p className='mb-0 text-xl leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard2content}</p>
              </div>
              <div className=' separator-effect-md'></div>
              <div className='max-w-full' style={{ width: '250px' }}>
                <h3 className=' font-semibold leading-9 text-3xl uppercase mt-0 mb-0 font-use sm:text-[24px]' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard3title}</h3>
                <p className='mb-0 text-xl leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard3content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' overflow-visible mt-[276px] mb-[240px] sm:mt-[140px]'>
        <div className=' relative flex flex-col items-start ml-auto mr-auto z-[1] max-w-[1200px] sm:ml-[10px]'>
          <div className='max-w-full w-full overflow-hidden'>
            <h2 className='uppercase mt-0 mb-0 font-semibold  font-use tracking-[2px] text-[#fff] text-[50px] leading-[60px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.fourthtitle}</h2>
            <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use tracking-[2px] text-[#fff] text-[80px] leading-[100px] sm:leading-10 sm:text-[34px] sm:tracking-[1px] '> {strapiContent.fourthsubtitle}</h2>
            <div className='max-w-full overflow-hidden w-[1100px] mt-[60px] ml-[100px] sm:ml-[10px] sm:mt-[50px]'>
              <div className=' w-[700px] sm:w-[95%]'>
                <p className='mb-0 text-xl mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                  {strapiContent.fourthcontent.data.fourthcontent}
                </p>
              </div>
              <div className=' w-full max-w-full justify-between items-center flex overflow-hidden mt-[60px] sm:items-start sm:flex-col'>
                <div className='max-w-full flex flex-col justify-center items-center mt-0 w-[400px] h-[370px] sm:w-[96%]'>
                  <ul className=' h-full flex flex-col justify-between pl-0 mt-0' style={{ marginBottom: '10px' }}>
                    <li className='w-full max-w-full items-start pl-0 flex mb-8'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>{strapiContent.fourthpoint1.data.fourthpoint1}</p>
                    </li>
                    <li className='w-full max-w-full items-start pl-0 flex mb-8'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>{strapiContent.fourthpoint2.data.fourthpoint2}</p>
                    </li>
                    <li className='w-full max-w-full items-start pl-0 flex mb-8'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>{strapiContent.fourthpoint3.data.fourthpoint3}</p>
                    </li>
                  </ul>
                </div>
                <div className='max-w-full w-[619px] sm:w-[96%]'>
                  <img className=' inline-block max-w-full align-middle ' src={strapiContent.fourthimg.localFile.url}></img>
                </div>
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

export default Technology

export const pageQuery = graphql`
query MyQuery {
    allStrapiTechnology {
      nodes {
        title
        content {
          data {
            content
          }
        }
        titleimg {
          localFile {
            url
          }
        }
        secondtitle
        secondsubtitle
        secondcontent {
          data {
            secondcontent
          }
        }
        secondimg {
          localFile {
            url
          }
        }
        secondpoint1 {
          data {
            secondpoint1
          }
        }
        secondpoint2 {
          data {
            secondpoint2
          }
        }
        secondpointsimg {
          localFile {
            url
          }
        }
        rgbtitle
        rgbsubtitle
        rgbimg {
          localFile {
            url
          }
        }
        thirdtitle
        thirdsubtitle
        thirdcontent {
          data {
            thirdcontent
          }
        }
        thirdimg {
          localFile {
            url
          }
        }
        thirdcard1title
        thirdcard1content
        thirdcard2title
        thirdcard2content
        thirdcard3title
        thirdcard3content
        fourthtitle
        fourthsubtitle
        fourthpoint1 {
          data {
            fourthpoint1
          }
        }
        fourthpoint2 {
          data {
            fourthpoint2
          }
        }
        fourthpoint3 {
          data {
            fourthpoint3
          }
        }
        fourthimg {
          localFile {
            url
          }
        }
        fourthcontent {
          data {
            fourthcontent
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
        linkedin {
          localFile {
            url
          }
        }
        twitter {
          localFile {
            url
          }
        }
        medium {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        git
      }
    }
  }
`
