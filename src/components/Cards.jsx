import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const WorkInfoData = [
        {
            image: PickMeals,
            title: "Pozol de cacao",
            text: "Deliciosa bebida hecha de maíz, endulzada con cacao y azúcar",
        },
        {
            image: PickMeals,
            title: "Tamal de chipilín",
            text: "Platillo hecho a base de maza, relleno de hoja de chipilín, salas de tomate y pollo deshebrado",
        },
        {
            image: PickMeals,
            title: "Pepita con tasajo",
            text: "Tiras de carne de res saladas y secadas (tasajo) cocidas y bañadas en una especie de mole de pepita de calabaza y arroz molidos, manteca y achiote.",
        },
    ]

    const WorkInfoData2 = [
        {
            image: PickMeals,
            title: "Mole",
            text: "Salsa mexicana muy condimentada hecha principalmente a base de chiles y especias, y que es espesada con masa de maíz, tortilla o pan",
        },
        {
            image: PickMeals,
            title: "Pozole",
            text: "Caldo hecho a base de granos de maíz cacahuazintle.",
        },
        {
            image: PickMeals,
            title: "Tacos",
            text: "Tortilla enrollada que puede contener, de manera opcional, algún aliño dentro de ella",
        },
    ]

    const WorkInfoData3 = [
        {
            image: PickMeals,
            title: "Pasta",
            text: "Masa hecha de una o diversas sustancias machacadas.",
        },
        {
            image: PickMeals,
            title: "Sushi",
            text: "A base de arroz, plato servido en porciones de pequeño tamaño que suele comerse con palillos de madera.",
        },
        {
            image: PickMeals,
            title: "Paella",
            text: "arroz, habitualmente acompañado por mariscos, pollo, legumbres y otros alimentos",
        },
    ]
    return(
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-heading">Platillos</p>
            <h1 className="primary-subheading">Platillos locales</h1>
            <p className="primary-text">
                Descubre más sobre los platillos típicos de nuestro destino
                más reciente: Chiapas
            </p>
        </div>
        <div className="work-section-bottom">
            {
                WorkInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>

        <div className="work-section-top">
            <h1 className="primary-subheading">Platillos nacionales</h1>
            <p className="primary-text">
                Descubre más sobre los platillos típicos de nuestro México lindo y
            </p>
        </div>
        <div className="work-section-bottom">
            {
                WorkInfoData2.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>

        <div className="work-section-top">
            <h1 className="primary-subheading" >Platillos internacionales</h1>
            <p className="primary-text">
                Descubre más sobre los platillos típicos de algunos países del mundo
            </p>
        </div>
        <div className="work-section-bottom">
            {
                WorkInfoData3.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Work;