import React from 'react'
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';


function Technology({ data }) {
  const strapiContent = data.allStrapiTechnology.nodes[0];

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
        <section className='top-nav'>
          <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
          </label>
          <ul class="menu">
            <li>solutions</li>
            <li>about</li>
            <li>partners</li>
            <li>newsroom</li>
            <li>carrers</li>
          </ul>
        </section>
      </div>
      <div className=' h-screen flex flex-col justify-start items-center bg-no-repeat' style={{ backgroundImage: `url(${strapiContent.titleimg.localFile.url})`, backgroundPosition: '100% 100%', backgroundSize: '67%' }}>
        <div className=' max-w-full ml-auto mr-auto'>
          <div className='max-w-full relative' style={{ width: '1200px', marginTop: '234px' }}>
            <h1 className='max-w-full uppercase mt-0 mb-0 font-medium font-use' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '100px', fontSize: '80px' }}>{strapiContent.title}</h1>
            <div className='max-w-full mt-8' style={{ color: '#fff', width: '500px', marginLeft: '100px' }}>
              <p className='mb-0 text-xl mt-0 leading-8  font-use-one'>{strapiContent.content.data.content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-60'>
        <div className='max-w-full flex justify-center items-center ml-auto mr-auto'>
          <div className='max-w-full relative' style={{ width: '1200px' }}>
            <h2 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{strapiContent.secondtitle}</h2>
            <h2 className='max-w-full uppercase mt-0 mb-0 font-light font-use-one' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}> {strapiContent.secondsubtitle}</h2>
            <p className=' mb-0 text-xl leading-8 font-use-one' style={{ width: '700px', marginTop: '50px', marginLeft: '100px', color: 'rgba(255, 255, 255, .85)' }}>
              <div dangerouslySetInnerHTML={{ __html: strapiContent.secondcontent.data.secondcontent }}></div>
            </p>
            <div className=' w-full max-w-full justify-center flex relative' style={{ marginTop: '104px' }}>
              <img src={strapiContent.secondimg.localFile.url} className='h-auto object-fill max-w-full inline-block align-middle' style={{ width: '800px' }}></img>
            </div>
            <div className=' w-full justify-between items-center flex relative' style={{ marginTop: '60px' }}>
              <div className='max-w-full' style={{ width: '430px', marginLeft: '100px' }}>
                <ul className='max-w-full flex flex-col pl-0 justify-between mt-0' style={{ width: '400px', height: '250px', marginBottom: '10px' }}>
                  <li className='w-full max-w-full flex items-start mb-8 pl-0'>
                    <div className='bullet-line-css'></div>
                    <p className='mb-0 text-xl leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.secondpoint1.data.secondpoint1}</p>
                  </li>
                  <li className='w-full max-w-full flex items-start mb-8 pl-0'>
                    <div className='bullet-line-css'></div>
                    <p className='mb-0 text-xl leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.secondpoint2.data.secondpoint2}</p>
                  </li>
                </ul>
              </div>
              <div>
                <Img fluid={strapiContent.secondpointsimg.localFile.url} className='object-cover max-w-full inline-block align-middle' style={{ width: '617px', height: '345px' }}></Img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '208px' }} >
        <div className=' relative flex items-start flex-col ml-auto mr-auto' style={{ maxWidth: '1200px', zIndex: '1' }}>
          <div>
            <h2 className=' uppercase mt-0 mb-0 font-semibold  font-use' style={{ lineHeight: '60px', fontSize: '50px', color: '#fff' }}>{strapiContent.rgbtitle}</h2>
            <h2 className=' max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ lineHeight: '100px', fontSize: '80px', color: '#fff' }}>{strapiContent.rgbsubtitle}</h2>
          </div>
          <div className=' w-full max-w-full mt-12'>
            <img className=' max-w-full inline-block align-middle' src={strapiContent.rgbimg.localFile.url}></img>
          </div>
        </div>
      </div>
      <div className=' pl-4 pr-4 mt-60'>
        <div className='flex flex-col relative items-start  ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
          <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '2px', fontSize: '50px', lineHeight: '60px', color: '#fff' }}>{strapiContent.thirdtitle}</h2>
          <h2 className='uppercase mt-0 mb-0 font-semibold max-w-full  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.thirdsubtitle}</h2>
          <div style={{ width: '700px', marginTop: '60px', marginLeft: '100px' }}>
            <p className='mb-0 leading-8 text-xl mt-0  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
              {strapiContent.thirdcontent.data.thirdcontent}
            </p>
          </div>
          <div className='flex relative justify-center'>
            <img className=' inline-block max-w-full align-middle' src={strapiContent.thirdimg.localFile.url}></img>
          </div>
          <div className='w-full max-w-full'>
            <div className='flex justify-between' style={{ gridRowGap: '16px', gridColumnGap: '16px' }}>
              <div className='max-w-full' style={{ width: '351px' }}>
                <h3 className=' font-semibold leading-9 text-3xl uppercase mt-0 mb-0 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard1title}</h3>
                <p className='mb-0 text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard1content}</p>
              </div>
              <div className=' max-w-full' style={{ width: '400px' }}>
                <h3 className=' font-semibold leading-9 text-3xl uppercase mt-0 mb-0 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard2title}</h3>
                <p className='mb-0 text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard2content}</p>
              </div>
              <div className='max-w-full' style={{ width: '250px' }}>
                <h3 className=' font-semibold leading-9 text-3xl uppercase mt-0 mb-0 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard3title}</h3>
                <p className='mb-0 text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard3content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' overflow-visible' style={{ marginTop: '276px', marginBottom: '240px' }}>
        <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
          <div className='max-w-full w-full overflow-hidden'>
            <h2 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ letterSpacing: '2px', color: '#fff', fontSize: '50px', lineHeight: '60px' }}>{strapiContent.fourthtitle}</h2>
            <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}> {strapiContent.fourthsubtitle}</h2>
            <div className='max-w-full overflow-hidden' style={{ width: '1100px', marginTop: '60px', marginLeft: '100px' }}>
              <div style={{ width: '700px' }}>
                <p className='mb-0 text-xl mt-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                  {strapiContent.fourthcontent.data.fourthcontent}
                </p>
              </div>
              <div className=' w-full max-w-full justify-between items-center flex overflow-hidden' style={{ marginTop: '60px' }}>
                <div className='max-w-full flex flex-col justify-center items-center mt-0' style={{ width: '400px', height: '370px' }}>
                  <ul className=' h-full flex flex-col justify-between pl-0 mt-0' style={{ marginBottom: '10px' }}>
                    <li className='w-full max-w-full items-start pl-0 flex mb-8'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 mt-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>{strapiContent.fourthpoint1.data.fourthpoint1}</p>
                    </li>
                    <li className='w-full max-w-full items-start pl-0 flex mb-8'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 mt-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>{strapiContent.fourthpoint2.data.fourthpoint2}</p>
                    </li>
                    <li className='w-full max-w-full items-start pl-0 flex mb-8'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 mt-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>{strapiContent.fourthpoint3.data.fourthpoint3}</p>
                    </li>
                  </ul>
                </div>
                <div className='max-w-full' style={{ width: '619px' }}>
                  <img className=' inline-block max-w-full align-middle' src={strapiContent.fourthimg.localFile.url}></img>
                </div>
              </div>
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
              <button class="btn btn-2 hover-slide-up">
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
