import React from 'react';


// What a pain...
import $ from 'jquery';
window.jQuery = window.$ = $;

// 'require' isn't hoisted, so jQuery is present by this point
require('owl.carousel');

const InitializeCarouselOnLoad = (WrappedComponent) =>(
    class extends React.Component {
        componentDidMount(){
            // Initialize carousel when element loaded
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                responsiveClass:true,
                navText: [
                    "<i class='fa fa-chevron-left'></i>",
                    "<i class='fa fa-chevron-right'></i>"
                ],
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    400: {
                        items:2,
                        nav:true
                    },
                    500:{
                        items:3,
                        nav:true
                    },
                    800:{
                        items:5,
                        nav:true
                    },
                    1000:{
                        items:7,
                        nav:true,
                    }
                }
            })
        }

        // No need to do anything crazy
        render(){ return <WrappedComponent /> }
    }
)

export default InitializeCarouselOnLoad;