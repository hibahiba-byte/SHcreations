function changeLanguage(lang) {
    document.documentElement.lang = lang;
    const translations = {
        'fr': {
            'about': "À propos de nous",
            'about_text': "Nous sommes une agence spécialisée en marketing digital, offrant des solutions sur mesure pour booster votre présence en ligne.",
            'services': "Nos Services",
            'contact': "Contactez-nous",
            'email': "Email : contact@shcreations.com",
            'phone': "Téléphone : +212 6XX XX XX XX"
        },
        'en': {
            'about': "About Us",
            'about_text': "We are a digital marketing agency offering tailor-made solutions to boost your online presence.",
            'services': "Our Services",
            'contact': "Contact Us",
            'email': "Email: contact@shcreations.com",
            'phone': "Phone: +212 6XX XX XX XX"
        },
        'ar': {
            'about': "معلومات عنا",
            'about_text': "نحن وكالة متخصصة في التسويق الرقمي، نقدم حلولًا مخصصة لتعزيز وجودك عبر الإنترنت.",
            'services': "خدماتنا",
            'contact': "اتصل بنا",
            'email': "البريد الإلكتروني: contact@shcreations.com",
            'phone': "الهاتف: +212 6XX XX XX XX"
        }
    };

    const elements = document.querySelectorAll('[data-translation]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translation');
        element.innerText = translations[lang][key];
    });
}