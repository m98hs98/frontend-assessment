import React, { useState, useEffect} from "react";
import './ResponsiveTabsAccordion.css';


const ResponsiveTabsAccordion = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    useEffect(() => {
        setActiveIndex(0);
    }, []);


    return (
        <div className="responsive-container">
            <div className="tab-titles">
                {data.map((item, index) => (
                    <button
                        key={index}
                        className={`tab-title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleItem(index)}>
                            {item.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`content ${activeIndex === index ? 'show' : ''}`}
                    >
                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                ))}
            </div>
            <div className="accordion">
                {data.map((item, index) => (
                    <div key={index}>
                        <button
                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleItem(index)}
                        >
                            {item.title}
                        </button>
                        <div
                            className={`accordion-content ${activeIndex === index ? 'show' : ''}`}
                        >
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResponsiveTabsAccordion;