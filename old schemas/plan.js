import sanityClient from 'part:@sanity/base/client';
export default {
        // This is the display name for the type
        title: "3DA Plan",
        
        // The identifier for this document type used in the api's
        name: "plan",
        
        // Documents have the type 'document'. Your schema may describe types beyond documents
        // but let's get back to that later.
        type: "document",
        
        // Now we proceed to list the fields of our document
        fields: [
          // This document has only one field
          {
            // The display name for this field
            title: "Patient Name",
  
            // The identifier for this field used in the api's
            name: "patientName",
  
            // The type of this field
            type: "string",
          },
          {
            name: 'docnum',
            title: 'Case No.',
            type: 'number',
          },
          /*

          {
            // The display name for this field
            title: "Doctor Name",
  
            // The identifier for this field used in the api's
            name: "doctorName",
  
            // The type of this field
            type: "reference",
            to: [{type: 'doctor'}]
          },
          
          */
            {
              title: 'Front View',
              name: 'front',
              type: 'array',
              of: [{
                type: 'image',
              }]
            },
            {
              title: 'Left View',
              name: 'left',
              type: 'array',
              of: [{
                type: 'image',
              }]
            },
            {
              title: 'Right View',
              name: 'right',
              type: 'array',
              of: [{
                type: 'image',
              }]
            },
            {
              title: 'Upper Occlusal View',
              name: 'upper',
              type: 'array',
              of: [{
                type: 'image',
              }]
            },
            {
              title: 'Lower Occlusal View',
              name: 'lower',
              type: 'array',
              of: [{
                type: 'image',
              }]
            },
        ]
      }