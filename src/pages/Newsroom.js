import React from 'react'
import { Link, graphql } from 'gatsby'


function Newsroom({ data }) {
    const strapiContent = data.allStrapiNewsroom.nodes[0];

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
            <div>
                <div className='max-w-full justify-center flex ml-auto mr-auto' style={{ marginBottom: '60px' }}>
                    <div className='max-w-full relative mt-20' style={{ width: '1000px' }}>
                        <div className='mt-20 block relative overflow-hidden'>
                            <div className=' relative block'>
                                <div>
                                    <div className='mb-0'>
                                        <div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[0].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[0].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[0].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[0].duration}</div> &nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block  text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[1].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[1].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[1].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[1].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[2].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[2].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[2].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[2].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[3].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[3].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[3].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[3].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[4].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[4].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[4].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[4].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[5].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[5].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[5].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[5].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[6].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[6].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[6].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[6].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[7].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[7].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[7].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[7].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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
                            <p className=' text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', width: '441px', marginTop: '30px', marginBottom: '30px' }}>{strapiContent.content.data.content}</p>
                            {/* getintouchbutton */}
                            <div className='social-platform font-use'>
                                <Link to="https://www.facebook.com/5cnetwork" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[0].localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[2].localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[1].localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://medium.com/pixxel-labs" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[3].localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
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

export default Newsroom

export const pageQuery = graphql`
query MyQuery {
    allStrapiNewsroom {
      nodes {
        newsimg {
          localFile {
            url
          }
        }
        news {
          title
          content {
            data {
              content
            }
          }
          duration
        }
        footertitle
        content {
          data {
            content
          }
        }
        sociallogo {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
      }
    }
  }
`
