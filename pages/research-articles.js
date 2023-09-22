import React from 'react'
import Head from 'next/head';

const ResearchArticlesData = [
    {
        ArticleName: "Hydrologic Changes in Indian Subcontinental River Basins (1901–2012)",
        ArticleLink: "https://journals.ametsoc.org/view/journals/hydr/17/10/jhm-d-15-0231_1.xml?tab_body=abstract-display",
        ArticleAuthors: ["Vimal Mishra", "Harsh L. Shah"],
        PublicationYear: "2016",
    },
    {
        ArticleName: "Hydroclimatological Perspective of the Kerala Flood of 2018",
        ArticleLink: "https://link.springer.com/content/pdf/10.1007/s12594-018-1079-3.pdf",
        ArticleAuthors: ["Vimal Mishra", "Harsh L. Shah"],
        PublicationYear: "2018",
    },
    {
        ArticleName: "Uncertainty and Bias in Satellite-Based Precipitation Estimates over Indian Subcontinental Basins: Implications for Real-Time Streamflow Simulation and Flood Prediction",
        ArticleLink: "https://journals.ametsoc.org/view/journals/hydr/17/2/jhm-d-15-0115_1.xml?tab_body=abstract-display",
        ArticleAuthors: ["Vimal Mishra", "Harsh L. Shah"],
        PublicationYear: "2016",
    }, {
        ArticleName: "Climate Change Impacts on Streamflow in India",
        ArticleLink: "https://www.researchgate.net/profile/Harsh-Shah-12/publication/330158561_Climate_Change_Impacts_on_Streamflow_in_India/links/5c303a08299bf12be3ae4d64/Climate-Change-Impacts-on-Streamflow-in-India.pdf",
        ArticleAuthors: ["Vimal Mishra", "Harsh L. Shah"],
        PublicationYear: "2018",
    }, {
        ArticleName: "Reconstruction of droughts in India using multiple land-surface models (1951–2015)",
        ArticleLink: "https://hess.copernicus.org/articles/22/2269/2018/",
        ArticleAuthors: ["Vimal Mishra", "Reepal Shah", "Syed Azhar", "Harsh Shah", "Parth Modi", "Rohini Kumar"],
        PublicationYear: "2018",
    }, {
        ArticleName: "Projected Increase in Hydropower Production in India under Climate Change",
        ArticleLink: "https://www.nature.com/articles/s41598-018-30489-4",
        ArticleAuthors: ["Syed Azhar Ali", "Saran Aadhar", "Harsh L. Shah", "Vimal Mishra "],
        PublicationYear: "2018",
    }, {
        ArticleName: "Propagation of forcing and model uncertainties on to hydrological drought characteristics in a multi-model century-long experiment in large river basins",
        ArticleLink: "https://link.springer.com/article/10.1007/s10584-016-1778-y",
        ArticleAuthors: ["L. Samaniego", "R. Kumar", "L. Breuer", "A. Chamorro", "M. Flörke", "I. G. Pechlivanidis", "D. Schäfer", "H. Shah", "T. Vetter", "M. Wortmann", "X. Zeng "],
        PublicationYear: "2017",
    }, {
        ArticleName: "Strong Influence of Irrigation on Water Budget and Land Surface Temperature in Indian Subcontinental River Basins",
        ArticleLink: "https://agupubs.onlinelibrary.wiley.com/doi/pdf/10.1029/2018JD029132",
        ArticleAuthors: ["Harsh L. Shah", "Tian Zhou", "Maoyi Huang", "Vimal Mishra"],
        PublicationYear: "2019",
    }, {
        ArticleName: "Multimodel assessment of sensitivity and uncertainty of evapotranspiration and a proxy for available water resources under climate change",
        ArticleLink: "https://link.springer.com/article/10.1007/s10584-016-1886-8",
        ArticleAuthors: ["Vimal Mishra", "Rohini Kumar", "Harsh L. Shah", "Luis Samaniego", "S. Eisner", "Tao Yang", "Climatic Change "],
        PublicationYear: "2017",
    }, {
        ArticleName: "Contrasting influence of human activities on agricultural and hydrological droughts in India",
        ArticleLink: "https://www.researchgate.net/profile/Vimal-Mishra-2/publication/348931428_Contrasting_influence_of_human_activities_on_agricultural_and_hydrological_droughts_in_India/links/6017ea2345851517ef2f1814/Contrasting-influence-of-human-activities-on-agricultural-and-hydrological-droughts-in-India.pdf",
        ArticleAuthors: ["Harsh L. Shah", "Deep Shah", "Vimal Mishra"],
        PublicationYear: "2021",
    }, {
        ArticleName: "Understanding each other's models: an introduction and a standard representation of 16 global water models to support intercomparison, improvement, and communication",
        ArticleLink: "https://gmd.copernicus.org/articles/14/3843/2021/",
        ArticleAuthors: ["Camelia-Eliza Telteu", "Hannes Müller Schmied", "Wim Thiery", "Guoyong Leng", "Peter Burek", "Xingcai Liu", "Julien Eric Stanislas Boulange", "Lauren Seaby Andersen", "Manolis Grillakis", "Simon Newland Gosling", "Yusuke Satoh", "Oldrich Rakovec", "Tobias Stacke", "Jinfeng Chang", "Niko Wanders, Harsh Lovekumar Shah, Tim Trautmann, Ganquan Mao, Naota Hanasaki, Aristeidis Koutroulis, Yadu Pokhrel", "Luis Samaniego", "Yoshihide Wada", "Vimal Mishra", "Junguo Liu", "Petra Döll", "Fang Zhao", "Anne Gädeke", "Sam S. Rabin", "Florian Herz"],
        PublicationYear: "2021",
    }, {
        ArticleName: "Impacts of hydrological model calibration on projected hydrological changes under climate change—a multi-model assessment in three large river basins",
        ArticleLink: "https://link.springer.com/article/10.1007/s10584-020-02872-6",
        ArticleAuthors: ["Shaochun Huang", "Harsh Shah", "Bibi S. Naz", "Narayan Shrestha", "Vimal Mishra", "Prasad Daggupati", "Uttam Ghimire", "Tobias Vetter"],
        PublicationYear: "2020",
    }, {
        ArticleName: "Roles of Irrigation and Reservoir Operations in Modulating Terrestrial Water and Energy Budgets in the Indian Subcontinental River Basins",
        ArticleLink: "https://agupubs.onlinelibrary.wiley.com/doi/pdfdirect/10.1029/2019JD031059",
        ArticleAuthors: ["Harsh L. Shah", "Tian Zhou", "Ning Sun", "Maoyi Huang", "Vimal Mishra"],
        PublicationYear: "2019",
    }, {
        ArticleName: "Does comprehensive evaluation of hydrological models influence projected changes of mean and high flows in the Godavari River basin?",
        ArticleLink: "https://link.springer.com/article/10.1007/s10584-020-02847-7",
        ArticleAuthors: ["Vimal Mishra", "Harsh Shah", "M. Rocío Rivas López", "Anastasia Lobanova", "Valentina Krysanova"],
        PublicationYear: "2020",
    },
    {
        ArticleName: "Multimodel assessment of water budget in Indian sub-continental river basins",
        ArticleLink: "https://www.sciencedirect.com/science/article/pii/S0022169421010271",
        ArticleAuthors: ["Anuj Prakash Kushwaha", "Amar Deep Tiwari", "Swarup Dangar", "Harsh Shah", "Shanti Shwarup Mahto", "Vimal Mishra"],
        PublicationYear: "2021",
    },



]


const ResearchArticles = () => {
    return (
        <>
            <Head>
                <title>Research Articles </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>Research Articles</h2>
                        {/* <p><Link href="/">Home</Link> &#187; Contact Us</p> */}
                    </div>
                </header>

                <div className="page_section">




                    {ResearchArticlesData.map((article, index) => (
                        <div className="services_card_container" key={index}>
                            <div className="services_card_content">
                                <h3>{article.ArticleName}</h3>
                                <p><strong>Authors: </strong>{article.ArticleAuthors.map((author, index) => (
                                    <>{author}, </>
                                ))} </p>

                                <div className='card_btn'>
                                    <a href={article.ArticleLink} target='blank'><button>Read More</button></a>
                                </div>



                            </div>

                        </div>


                    ))}


                </div>

            </div>


        </>
    )
}

export default ResearchArticles