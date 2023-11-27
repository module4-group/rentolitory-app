$(document).ready(showApartment);
let currentPage=0;
function showApartment() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments",
        data: {
            pageNo: currentPage,
            pageSize: 3
        },
        success: function (data) {
            let contentWeb = "";
            let paging="";
            for (let i = 0; i < data.content.length; i++) {
                contentWeb += `<section
                             class="elementor-section elementor-inner-section elementor-element elementor-element-587cc9e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                             data-id="587cc9e" data-element_type="section"
                             data-settings="{&quot;mdp_selection_sticky_effect_enable&quot;:false}">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b8165fd"
                                 data-id="b8165fd" data-element_type="column"
                                 data-settings="{&quot;mdp_selection_sticky_column_effect_enable&quot;:false}">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-ec3bea6 elementor-widget elementor-widget-image"
                                         data-id="ec3bea6" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img fetchpriority="high" decoding="async" width="768" height="512"
                                                 src="../../wp-content/uploads/sites/26/2020/09/real-photo-of-cozy-dark-bedroom-interior-with-many-decorative-c-768x512.jpg"
                                                 class="elementor-animation-grow attachment-medium_large size-medium_large wp-image-240"
                                                 alt="Real photo of cozy, dark bedroom interior with many decorative c"
                                                 srcset="https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/real-photo-of-cozy-dark-bedroom-interior-with-many-decorative-c-768x512.jpg 768w, https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/real-photo-of-cozy-dark-bedroom-interior-with-many-decorative-c-300x200.jpg 300w, https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/real-photo-of-cozy-dark-bedroom-interior-with-many-decorative-c-1024x683.jpg 1024w, https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/real-photo-of-cozy-dark-bedroom-interior-with-many-decorative-c-1536x1025.jpg 1536w, https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/real-photo-of-cozy-dark-bedroom-interior-with-many-decorative-c-800x534.jpg 800w, https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/real-photo-of-cozy-dark-bedroom-interior-with-many-decorative-c.jpg 2000w"
                                                 sizes="(max-width: 768px) 100vw, 768px"/></div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3910c1d"
                                 data-id="3910c1d" data-element_type="column"
                                 data-settings="{&quot;mdp_selection_sticky_column_effect_enable&quot;:false}">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-cec7600 elementor-widget elementor-widget-heading"
                                         data-id="cec7600" data-element_type="widget"
                                         data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <style>/*! elementor - v3.17.0 - 08-11-2023 */
                                            .elementor-heading-title {
                                                padding: 0;
                                                margin: 0;
                                                line-height: 1
                                            }
​
                                            .elementor-widget-heading .elementor-heading-title[class*=elementor-size-] > a {
                                                color: inherit;
                                                font-size: inherit;
                                                line-height: inherit
                                            }
​
                                            .elementor-widget-heading .elementor-heading-title.elementor-size-small {
                                                font-size: 15px
                                            }
​
                                            .elementor-widget-heading .elementor-heading-title.elementor-size-medium {
                                                font-size: 19px
                                            }
​
                                            .elementor-widget-heading .elementor-heading-title.elementor-size-large {
                                                font-size: 29px
                                            }
​
                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xl {
                                                font-size: 39px
                                            }
​
                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {
                                                font-size: 59px
                                            }</style>
                                            <h6 class="elementor-heading-title elementor-size-default">4 month ago</h6>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-77442b8 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="77442b8" data-element_type="widget" data-widget_type="icon-box.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-icon-box-wrapper">
                                                <div class="elementor-icon-box-icon">
                    \t\t\t\t<span class="elementor-icon elementor-animation-">
                    \t\t\t\t<i aria-hidden="true" class="fas fa-map-marker-alt"></i>\t\t\t\t</span>
                                                </div>
                                                <div class="elementor-icon-box-content">
                                                    <h5 class="elementor-icon-box-title">
                    \t\t\t\t\t<span>
                    \t\t\t\t\t\t\t\t\t\t\t</span>
                                                    </h5>
                                                    <p class="elementor-icon-box-description">
                                                        ${data.content[i].name + i}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
​
                                    <div class="elementor-element elementor-element-d95212d elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                         data-id="d95212d" data-element_type="widget"
                                         data-widget_type="heading.default">
                                        <div class="elementor-widget-container" id="numberOfBedRooms">
                                            <div class="elementor-element elementor-element-c28c00e elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="c28c00e" data-element_type="widget" data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <p class="elementor-heading-title elementor-size-default">${data.content[i].numberOfRoom}<span> Rooms</span>
</p></div>
                                            </div>
                                            </div>
                                    </div>
                                    <div class="elementor-element elementor-element-0252245 elementor-widget__width-auto elementor-widget elementor-widget-image"
                                         data-id="0252245" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img decoding="async" width="16" height="14"
                                                 src="../../wp-content/uploads/sites/26/2020/09/bed.png"
                                                 class="attachment-thumbnail size-thumbnail wp-image-77" alt=""/>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-203c813 elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                         data-id="203c813" data-element_type="widget"
                                         data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <p class="elementor-heading-title elementor-size-default">${data.content[i].numberOfBedroom} <span> beds</span> </p></div>
                                    </div>
                                    <div class="elementor-element elementor-element-f76ef18 elementor-widget__width-auto elementor-widget elementor-widget-image"
                                         data-id="f76ef18" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width="14" height="14"
                                                 src="../../wp-content/uploads/sites/26/2020/09/crop.png"
                                                 class="attachment-thumbnail size-thumbnail wp-image-76" alt=""/>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-4219a8d elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                         data-id="4219a8d" data-element_type="widget"
                                         data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <p class="elementor-heading-title elementor-size-default"><span>Area</span> ${data.content[i].area} <span>Ft²</span></p>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-ede74f1 elementor-widget elementor-widget-heading"
                                         data-id="ede74f1" data-element_type="widget"
                                         data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <h3 class="elementor-heading-title elementor-size-default"><b>$${data.content[i].monthlyRent}</b>/month
                                            </h3></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>`
            }
            for (let i = 1; i <= data.totalPages; i++) {
                paging += `<li class="page-item"><a class="page-link" href="#" >${i}</a></li>`;
            }
            document.getElementById("show-apartment").innerHTML = contentWeb;
            document.getElementById("pagination").innerHTML=paging;
            console.log(data)

        }

})
}

function nextPage() {
    currentPage++;
    showApartment();
}
function previousPage(){
    if (currentPage===0){
        return;
    }
    currentPage--;
    showApartment();
}