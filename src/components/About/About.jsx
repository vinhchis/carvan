import BMW from '../../assets/image/brands/bmw.png'
import BMW_Car from '../../assets/image/image_car/bmw.png'
import Mercedes from '../../assets/image/brands/mercedes.png'
import Mercedes_Car from '../../assets/image/image_car/mercedes.png'
import Toyota from '../../assets/image/brands/toyota.png'
import Toyota_Car from '../../assets/image/image_car/toyota.png'
import Ford from '../../assets/image/brands/ford.png'
import Ford_Car from '../../assets/image/image_car/ford.png'
import Mazda from '../../assets/image/brands/mazda.png'
import Mazda_Car from '../../assets/image/image_car/mazda.png'
import Honda from '../../assets/image/brands/honda.png'
import Honda_Car from '../../assets/image/image_car/honda.png'
import Hyundai from '../../assets/image/brands/hyundai.png'
import Hyundai_Car from '../../assets/image/image_car/hyundai.png'
import KIA from '../../assets/image/brands/kia.png'
import KIA_Car from '../../assets/image/image_car/kia.png'
import CARVAN from '../../assets/image/brands/CARVAN.png'

import "./about.css"


const About = () => {
    return (
        <div className="carvan-content">
            <p className="title">About Us</p>
            <p className="content-about">
                <h2 className="whoweare">Who we are</h2>
                <p className="describe">The ‘CARVAN’ is largest online car market. It caters to needs of everyone, be it a
                    family, business or individuals. This initiative is aimed towards providing information
                    and details about CAR’s to buyers.
                    <br />The site provides details and specifications of various models offered by the
                    companies. It also provide pictures and images to have a better look.
                    ‘CARVAN’ is looking to restructure the entire website to provide information and also
                    connect with prospective customers.
                    <br />The website is to be developed for the Windows Platform using HTML5, JavaScript
                    and Geolocation. The site should work well in all leading browsers including Chrome,
                    IE, Firefox etc.
                    <img src={CARVAN} alt="" />
                </p>
            </p>
            <div className="bmw">
                <div>
                    <img src={BMW} alt="BMW" height={200} />
                    <p className="brand-bmw">BMW</p>
                    <img src={BMW_Car} alt="BMW_Car" height={200} />
                </div>
                <div className="detail-bmw">
                    <b>Detail of the company</b>
                    <p>Bayerische Motoren Werke AG, abbreviated as BMW , is a German multinational manufacturer of
                        luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.
                        The company was founded in 1916 as a manufacturer of aircraft engines, 
                        which it produced from 1917 to 1918 and again from 1933 to 1945.
                        </p>
                    <b>History</b>
                    <p>Otto Flugmaschinenfabrik was founded in 1910 by Gustav Otto in Bavaria
                        The name BMW dates back to 1913
                        The company produced its first motorcycle, the BMW R 32 in 1923
                        The firm was reorganized on 7 March 1916 into Bayerische Flugzeugwerke AG. 
                        This company was then renamed to Bayerische Motoren Werke (BMW) in 1922. 
                        However, the name BMW dates back to 1913, when the original 
                        company to use the name was founded by Karl Rapp (initially as Rapp Motorenwerke GmbH)
                    </p>
                    <b>Upcoming Events</b>
                    <p>BMW MOTORRAD</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
            </div >

            <div className="mercedes">

                <div className="detail-mercedes">
                    <b>Detail of the company</b>
                    <p>Bayerische Motoren Werke AG, abbreviated as BMW , is a German multinational manufacturer of
                        luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany
                        Mercedes-Benz AG produces consumer luxury vehicles and light commercial vehicles badged as Mercedes-Benz. 
                        From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) 
                        are managed by Daimler Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021.
                        In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 million passenger cars</p>
                    <b>History</b>
                    <p>Otto Flugmaschinenfabrik was founded in 1910 by Gustav Otto in Bavaria

                        The name BMW dates back to 1913

                        The company produced its first motorcycle, the BMW R 32 in 1923

                    </p>
                    <b>Upcoming Events</b>
                    <p>SUMMER TRAINING</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
                <div>
                    <img src={Mercedes} alt="Mercedes" height={200} />
                    <p className="brand-mercedes">MERCEDES</p>
                    <img src={Mercedes_Car} alt="Mercedes_Car" height={200} />
                </div>
            </div >

            <div className="toyota">
                <div>
                    <img src={Toyota} alt="Toyota" height={200} />
                    <p className="brand-toyota">TOYOTA</p>
                    <img src={Toyota_Car} alt="Toyota_Car" height={200} />
                </div>
                <div className="detail-toyota">
                    <b>Detail of the company</b>
                    <p>Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan
                    It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world, 
                    producing about 10 million vehicles per year
                    </p>
                    <b>History</b>
                    <p>1920s–1930s <br/>
                    In 1924, Sakichi Toyoda invented the Toyoda Model G Automatic Loom
                    In 1929, the patent for the automatic loom was sold to the British company Platt Brothers,
                    generating the starting capital for automobile development<br/>
                    1940s<br/>
                    Japan was heavily damaged in World War II and Toyota's plants, which were used for the war effort, were not spared


                    </p>
                    <b>Upcoming Events</b>
                    <p>SMASHING PUMPKINS<br/>
                    DEPECHE MODE</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
            </div >

            <div className="ford">

                <div className="detail-ford">
                    <b>Detail of the company</b>
                    <p>Ford Motor Company (commonly known as Ford) 
                    is an American multinational automobile manufacturer headquartered in Dearborn, 
                    Michigan, United States.It was founded by Henry Ford and incorporated on June 16, 1903
                    </p>
                    <b>History</b>
                    <p>The Henry Ford Company was Henry Ford's first attempt at a car manufacturing company and was established on November 3, 1901. 
                    This became the Cadillac Motor Company on August 22, 1902, after Ford left with the rights to his name
                    Between 1903 and 1908, Ford produced the Models A, B, C, F, K, N, R, and S. 
                    Hundreds or a few thousand of most of these were sold per year
                    </p>
                    <b>Upcoming Events</b>
                    <p>NO EVENT</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
                <div>
                    <img src={Ford} alt="Ford" height={100} />
                    <p className="brand-ford">FORD</p>
                    <img src={Ford_Car} alt="Ford_Car" height={150} />
                </div>
            </div >

            <div className="mazda">
                <div>
                    <img src={Mazda} alt="Mazda" height={200} />
                    <p className="brand-mazda">MAZDA</p>
                    <img src={Mazda_Car} alt="Mazda_Car" height={150} />
                </div>
                <div className="detail-mazda">
                    <b>Detail of the company</b>
                    <p>Mazda Motor Corporation also known as simply Mazda, 
                        is a Japanese multinational automotive manufacturer headquartered in Fuchū, Hiroshima, Japan
                        The company was founded on January 30, 1920 as Toyo Cork Kogyo, a cork-making factory, by Jujiro Matsuda</p>
                    <b>History</b>
                    <p>Mazda began as the Toyo Cork Kogyo Co., Ltd, as a cork-making factory founded in Hiroshima, Japan, 30 January 1920.
                         Toyo Cork Kogyo renamed itself to Toyo Kogyo Co., Ltd. in 1927. 
                         In the late 1920s the company had to be saved from bankruptcy by Hiroshima Saving Bank and other business 
                         leaders in Hiroshima
                    </p>
                    <b>Upcoming Events</b>
                    <p>MAZDA MX-5 SETS SUSTAINABLE FUEL BENCHMARK ON ROAD AND TRACK</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
            </div >

            <div className="honda">

                <div className="detail-honda">
                    <b>Detail of the company</b>
                    <p>Honda Motor is a Japanese public multinational conglomerate manufacturer of automobiles, 
                        motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan
                        Honda has been the world's largest motorcycle manufacturer since 1959,
                        reaching a production of 400 million by the end of 2019</p>
                    <b>History</b>
                    <p>Throughout his life, Honda's founder, Soichiro Honda (1906–1991), had an interest in automobiles. 
                        He worked as a mechanic at the Art Shokai garage, where he tuned cars and entered them in races. 
                        In 1937, with financing from his acquaintance Kato Shichirō, 
                        Honda founded Tōkai Seiki (Eastern Sea Precision Machine Company) to make piston rings working out of the Art Shokai garage
                    </p>
                    <b>Upcoming Events</b>
                    <p>WINNER X</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
                <div>
                    <img src={Honda} alt="Honda" height={200} />
                    <p className="brand-honda">HONDA</p>
                    <img src={Honda_Car} alt="Honda_Car" height={200} />
                </div>
            </div >

            <div className="hyundai">
                <div>
                    <img src={Hyundai} alt="Huyndai" height={200} />
                    <p className="brand-hyundai">HYUNDAI</p>
                    <img src={Hyundai_Car} alt="Huyndai_Car" height={150} />
                </div>
                <div className="detail-hyundai">
                    <b>Detail of the company</b>
                    <p>Hyundai Motor Company, often abbreviated to Hyundai Motors and commonly known as Hyundai
                    , is a South Korean multinational automotive manufacturer headquartered in Seoul, South Korea, and founded in 1967. Currently, the company owns 33.88 percent of Kia Corporation,
                    and also fully owns two marques including its luxury cars subsidiary, 
                    Genesis Motor, and an electric vehicle sub-brand, Ioniq.Those three brands altogether comprise the Hyundai Motor Group
                    </p>
                    <b>History</b>
                    <p>
                    Chung Ju-Yung (1915–2001) founded the Hyundai Engineering and Construction Company in 1947. 
                    Hyundai Motor Company was later established in 1967, and the company's first model, the Cortina, 
                    was released in cooperation with Ford Motor Company in 1968.[12] When Hyundai wanted to develop their own car, 
                    they hired George Turnbull in February 1974, the former managing director of Austin Morris at British Leyland. 
                    He in turn hired five other top British car engineers. They were body designer Kenneth Barnett, engineers John Simpson 
                    and Edward Chapman, John Crosthwaite, formerly of BRM, as chassis engineer and Peter Slater as chief development engineer
                    </p>
                    <b>Upcoming Events</b>
                    <p>NO EVENT</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
            </div >

            <div className="kia">

                <div className="detail-kia">
                    <b>Detail of the company</b>
                    <p>Kia Corporation, commonly known as Kia and formerly known as Kyungsung Precision Industry
                    and Kia Motors Corporation, is a South Korean multinational automobile manufacturer headquartered in Seoul, South Korea
                    It is South Korea's second largest automobile manufacturer, after its parent company, Hyundai Motor Company, 
                    with sales of over 2.8 million vehicles in 2019. As of 2015, the Kia Corporation is minority owned by Hyundai,
                    which holds a 33.88% stake valued at just over US$6 billion. Kia in turn is a minority owner of more than twenty Hyundai 
                    subsidiaries ranging from 4.9% up to 45.37%, totaling more than US$8.3 billion
                    </p>
                    <b>History</b>
                    <p>ia was founded on June 9, 1944, as Kyungsung Precision Industry, a manufacturer of steel tubing 
                        and bicycle parts, eventually producing Korea's first domestic bicycle, the Samchuly, in 1951.
                         In 1952, Kyungsung Precision Industry changed its name to Kia Industries,
                         and later built Honda-licensed small motorcycles (starting in 1957) and Mazda-licensed trucks (1962) 
                         and cars (1974). The company opened its first integrated automotive assembly plant in 1973, the Sohari Plant 
                    </p>
                    <b>Upcoming Events</b>
                    <p>TRIPPLE REDD<br/>
                    SAN HOLO</p>
                    <a href='#' className='detailmore'>Detail More</a>
                </div>
                <div>
                    <img src={KIA} alt="KIA" height={70} />
                    <p className="brand-kia">KIA</p>
                    <img src={KIA_Car} alt="KIA_Car" height={200} />
                </div>
            </div >
        </div>
    );
}

export default About;