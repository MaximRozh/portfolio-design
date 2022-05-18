export const queryAll = `{'about': *[_type == 'abouts']{
    title,
    description,
    imgUrl
   },
    'brands': *[_type == 'brands']{
      imgUrl,
      name,
      _id
    },
    'experiences': *[_type == 'experiences']{
      year,
      works
    },
    'personalInfo': *[_type == 'contactInfo']{
      email,
      phoneNumber,
      image,
      logo
    },
    'skills': *[_type == 'skills']{
      name,
      bgColor,
      icon,
    },
    'testimonials': *[_type == 'testimonials']{
      name,
      company,
      imgurl,
      feedback
    },
    'works': *[_type == 'works']{
      title,
      description,
      projectLink,
      imgUrl,
      tags
    },
   }
   `