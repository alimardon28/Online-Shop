import React from 'react';

const Contacts = () => {
    return (
        <div id='contac'>
          <div id="contact">
              <div className="contact_box">
                  <h3>Our office</h3>
              <p id='lokation'>
                 <iframe
                 title='location'
                    className='contact-location-iframe'
                    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d95940.10745255738!2d69.1514192434911!3d41.284310825114886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d41.2224818!2d69.2400725!4m5!1s0x38ae8d54a1c04b77%3A0x76504a72d3e75a03!2sNajot%20Ta&#39;lim%2C%20Olmazor%20street%2C%2072A%20Tashkent%20Kichik%20halqa%20yo&#39;li!3m2!1d41.3468947!2d69.2157247!5e0!3m2!1sru!2s!4v1647262428403!5m2!1sru!2s" loading="lazy"
                     width="723"
                     height="424"
                     frameBorder="0"
                     style={{ border: 0 }}
                     aria-hidden="false"
                     tabIndex="0"

                    />
                </p>
                <p id='iframe'><i className="bi bi-geo-alt"></i>Najot Ta'lim, Olmazor street, 72A Tashkent Kichik halqa yo'li</p>
              </div>
              <div className="contacts_link">
                   <span id='span-icons'><i className="bi bi-whatsapp"></i></span>
                   <span id='span-icons'><i className="bi bi-wordpress"></i></span>
                   <span id='span-icons'><i className="bi bi-instagram"></i></span>
                   <span id='span-icons'><i className="bi bi-telegram"></i></span>
              </div>
          </div>
          <div className="number">
              <h2><i className="bi bi-telephone-fill"></i>+7 777 777 77 77</h2>
          </div>


        </div>
    );
}

export default Contacts;
