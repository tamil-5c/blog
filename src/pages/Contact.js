import React from 'react'
import { Link, graphql } from 'gatsby'

function Contact({data}) {
const strapiContent=data.allStrapiContact.nodes[0];

    return (
        <div className=' bg-black Homepage'>
            <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
                <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
                    <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use'>
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
            <div className='Contact-page' style={{backgroundImage:`url(${strapiContent.contactimg.localFile.url})`}}>
                <div className='max-w-full ml-auto mr-auto'>
                    <div className='max-w-full relative' style={{ width: '1200px', marginTop: '234px' }}>
                        <h1 className=' uppercase max-w-full mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.title}</h1>
                        <div className=' max-w-full mt-8' style={{ width: '500px', marginLeft: '100px' }}>
                            <p className=' mt-0 mb-0 leading-8 font-use-one' style={{ fontSize: '20px', color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.titlecontent.data.titlecontent}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className='flex flex-col relative items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }} >
                    <h2 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px' }}>{strapiContent.sectitle}</h2>
                    <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.secsubtitle}</h2>
                    <div className='contact-link'>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center' style={{ color: '#fff', width: '460px', height: '142px', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[0].localFile.url} className='max-w-full inline-block align-middle' style={{ marginRight: '30px' }}></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold' style={{ fontSize: '30px', lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[0].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center' style={{ color: '#fff', width: '460px', height: '142px', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[2].localFile.url} className='max-w-full inline-block align-middle' style={{ marginRight: '30px' }}></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold' style={{ fontSize: '30px', lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[1].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center' style={{ color: '#fff', width: '460px', height: '142px', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[4].localFile.url} className='max-w-full inline-block align-middle' style={{ marginRight: '30px' }}></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold' style={{ fontSize: '30px', lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[2].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center' style={{ color: '#fff', width: '460px', height: '142px', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[3].localFile.url} className='max-w-full inline-block align-middle' style={{ marginRight: '30px' }}></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold' style={{ fontSize: '30px', lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[3].title}</div>
                            </div>
                        </Link>
                        <Link className='flex max-w-full uppercase text-lg items-center justify-center' style={{ color: '#fff', width: '460px', height: '142px', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[1].localFile.url} className='max-w-full inline-block align-middle' style={{ marginRight: '30px' }}></img>
                            <div>
                                <div className=' leading-9 uppercase font-use font-semibold' style={{ fontSize: '30px', lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[4].title}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '220px', marginBottom: '200px' }}>
                <div className='relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <h2 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px' }}>{strapiContent.loctitle}</h2>
                    <h2 className='max-w-full uppercase mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.locsubtitle}</h2>
                    <div className='flex mt-20 justify-between' style={{ width: '1020px', marginLeft: '100px' }}>
                        <div className='w-auto flex'>
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
                        <div className=' flex' style={{ width: '480px' }}>
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
            <div className='footer section'>
                <div className='relative ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8' style={{ marginTop: '101px', border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase font-semibold font-use' style={{ color: 'rgba(255, 255, 255, .85) ', lineHeight: '48px', fontSize: '40px' }}>IMAGINE THE POSSIBILITIES</div>
                            <p className=' text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', width: '441px', marginTop: '30px', marginBottom: '30px' }}>Be future ready with the best geospatial dataset for your sector</p>
                            {/* getintouchbutton */}
                            <div className='social-platform font-use'>
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

export default Contact

export const pageQuery=graphql`
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
      }
    }
  }
`