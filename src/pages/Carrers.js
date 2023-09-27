import React from 'react'
import { Link, graphql } from 'gatsby'


function Carrers({ data }) {
    const strapiContent = data.allStrapiCarrer.nodes[0];

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
                        <Link to='/Contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Contact</Link>
                    </nav>
                </div>
            </div>
            <div className='carrers-home' style={{ backgroundImage: `url(${strapiContent.homeimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto'>
                    <div className=' max-w-full relative' style={{ width: '1200px', marginTop: '234px' }}>
                        <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ letterSpacing: '2px', color: '#fff', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.title}</h1>
                        <div style={{ marginLeft: '100px', width: '500px' }} className='max-w-full mt-8'>
                            <p className='mb-0 mt-0 leading-8  font-use font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '20px' }}>
                                {strapiContent.titlecontent.data.titlecontent}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '120px' }}>
                <div className='flex relative flex-col ml-auto mr-auto items-start' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <h2 className=' uppercase mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{strapiContent.sectitle}</h2>
                    <h2 className=' uppercase max-w-full mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.secsubtitle}</h2>
                    <div className=' mt-8' style={{ width: '800px', marginLeft: '100px' }}>
                        <p className=' mb-6 leading-8 mt-0 text-xl font-use' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                            {strapiContent.content.data.content}
                        </p>
                        <div>
                            <div>
                                <div>
                                    <div className=' text-left  font-openings'>
                                        <h2 className='m-0 uppercase font-semibold  font-use' style={{ borderBottom: '1px solid #a0a0a0', paddingBottom: '9px', color: '#fff', fontSize: '19px', letterSpacing: '2px', lineHeight: '60px' }}>{strapiContent.openpositiontitle}</h2>
                                        <ul className=' list-none m-0 text-xs' style={{ padding: '10px 0 0 0' }}>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base font-semibold font-use' style={{ color: '#fff' }}>{strapiContent.openposition[0].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[0].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[0].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base font-semibold font-use' style={{ color: '#fff' }}>{strapiContent.openposition[1].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[1].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[1].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base font-semibold font-use' style={{ color: '#fff' }}>{strapiContent.openposition[2].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[3].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[3].location}</span>
                                                    </li>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[2].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[2].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base font-semibold font-use' style={{ color: '#fff' }}>{strapiContent.openposition[4].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[4].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[4].location}</span>
                                                    </li>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[5].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[5].location}</span>
                                                    </li>
                                                    {/* <li className=' list-none m-0 clear-both' style={{color:'#686868'}}>
                                                    <a className=' openings-position'>SENSORS SPECIALIST (EO/IR)</a>
                                                    <span className='float-right font-use' style={{paddingTop:'9px',color:'#fff'}}>Bangalore,KA</span>
                                                </li> */}
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base font-semibold font-use' style={{ color: '#fff' }}>{strapiContent.openposition[6].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[6].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[6].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base font-semibold font-use' style={{ color: '#fff' }}>{strapiContent.openposition[7].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[7].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[7].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base font-semibold font-use' style={{ color: '#fff' }}>{strapiContent.openposition[8].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <a className=' openings-position'>{strapiContent.openposition[8].position}</a>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[8].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' overflow-hidden pr-4 pl-4' style={{ marginTop: '240px' }}>
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <div>
                        <h1 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ letterSpacing: '2px', color: '#fff', fontSize: '50px', lineHeight: '60px' }}>{strapiContent.buildtitle}</h1>
                        <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ letterSpacing: '2px', color: '#fff', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.buildsubtitle}</h1>
                    </div>
                    <div className='flex flex-col items-start mt-8' style={{ width: '800px', marginLeft: '100px' }}>
                        <p className=' mb-0 leading-8 mt-0 text-xl font-use' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.buildpara.data.buildpara}</p>
                    </div>
                    <div className='carrer-grid'>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[0].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl font-semibold leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[0].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8 font-semibold font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[0].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[1].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl font-semibold leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[1].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8 font-semibold font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[1].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[2].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl font-semibold leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[2].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8 font-semibold font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[2].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[3].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl font-semibold leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[3].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8 font-semibold font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[3].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[4].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl font-semibold leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[4].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8 font-semibold font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[4].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[5].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl font-semibold leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[5].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8 font-semibold font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[5].content.data.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer section'>
                <div className='relative ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8' style={{ marginTop: '101px', border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase font-semibold font-use' style={{ color: 'rgba(255, 255, 255, .85) ', lineHeight: '48px', fontSize: '40px' }}>{strapiContent.footertitle}</div>
                            <p className=' text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', width: '441px', marginTop: '30px', marginBottom: '30px' }}>{strapiContent.footercontent}</p>
                            {/* getintouchbutton */}
                            <button class="btn btn-2 hover-slide-up uppercase">
                                <span>{strapiContent.getintouch}</span>
                            </button>
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
                        <source src={strapiContent.footervideo[0].localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Carrers

export const pageQuery = graphql`
query MyQuery {
    allStrapiCarrer {
      nodes {
        title
        titlecontent {
          data {
            titlecontent
          }
        }
        homeimg {
          localFile {
            url
          }
        }
        sectitle
        secsubtitle
        content {
          data {
            content
          }
        }
        openpositiontitle
        openposition {
          title
          position
          location
        }
        buildtitle
        buildsubtitle
        buildpara {
          data {
            buildpara
          }
        }
        build {
          title
          content {
            data {
              content
            }
          }
        }
        buildimg {
          localFile {
            url
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
        getintouch
      }
    }
  }
`