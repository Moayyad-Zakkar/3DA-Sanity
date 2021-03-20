import client from 'part:@sanity/base/client'
import { object } from 'prop-types';

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
            name: 'caseNum',
            title: 'Case No.',
            type: 'number',
          },
          {
            name: 'patientSheet',
            title: 'Patient Inforamation Sheet (Arabic)',
            type: 'boolean',
          },
          {
            // The display name for this field
            title: "Upper Aligners Number",
  
            // The identifier for this field used in the api's
            name: "upperCount",
  
            // The type of this field
            type: "number",
        
            
          },
          {
            // The display name for this field
            title: "Lower Aligners Number",
  
            // The identifier for this field used in the api's
            name: "lowerCount",
  
            // The type of this field
            type: "number",
        
          },
          {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'patientName',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
          {
            title: 'Videos',
            name: 'sequence',
            type: "object",
            description: 'Here you upload the image sequence of the treatment plan',
            options: {
              collapsible: true,
            },
            fields: [
                {
                  title: 'Front View',
                  name: 'front',
                  type: 'file',     
                },
                {
                  title: 'Left View',
                  name: 'left',
                  type: 'file',
                },
                {
                  title: 'Right View',
                  name: 'right',
                  type: 'file',
                },
                {
                  title: 'Upper Occlusal View',
                  name: 'upper',
                  type: 'file',              
                },
                {
                  title: 'Lower Occlusal View',
                  name: 'lower',
                  type: 'file',                
                },
            ]
          },
          {
            title: 'Before & After Images',
            name: 'beforeAfter',
            type: "object",
            description: 'Here you upload Before & After images of the treatment plan',
            options: {
              collapsible: true,
            },
            fields: [
                {
                  title: 'Front View',
                  name: 'front',
                  type: 'image',     
                },
                {
                  title: 'Left View',
                  name: 'left',
                  type: 'image',
                },
                {
                  title: 'Right View',
                  name: 'right',
                  type: 'image',
                },
                {
                  title: 'Upper Occlusal View',
                  name: 'upper',
                  type: 'image',              
                },
                {
                  title: 'Lower Occlusal View',
                  name: 'lower',
                  type: 'image',                
                },
            ]
          },
/*
          {
            title: "Doctor Name",
            name: "doctorName",
            weak: true,
            type: "reference",
            to: [{type: 'doctor'}]
          },
          
         *

          /*
            {
              title: 'Front View',
              name: 'front',
              type: 'array',
              of: [{
                type: 'image',
              }],
            },

            */
           
        ],
      }