import client from 'part:@sanity/base/client'
import { object } from 'prop-types';

import React from 'react'

// Important items to allow form fields to work properly and patch the dataset.
import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

// Import the TextInput from UI
import { TextInput } from '@sanity/ui'

/*
const HoverInput = React.forwardRef((props, ref) => {
  const { type, onChange } = props
  return(
    <div>
        <Flex align="center">
      <Checkbox
        id="checkbox"
        style={{display: 'block'}}
      />
      <Box flex={1} paddingLeft={3}>
        <Text>
          <label htmlFor="checkbox">
            Reveal Patient Sheet
          </label>
        </Text>
      </Box>
    </Flex>
    <FormField label={type.title} description={type.description}>
      <TextInput
        type="text"
        ref={ref}
        placeholder={type.placeholder}
        value={props.value}
        onChange={event => {onChange(PatchEvent.from(set(event.target.value)))}}
      /> 
    </FormField>
    </div>
  )

})
*/

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
          // {
          //   name: 'patienSheet',
          //   title: 'Patient Sheet',
          //   type: 'string',
          //   inputComponent: HoverInput
          // },
          {
            // The display name for this field
            title: "Upper Aligners",
  
            // The identifier for this field used in the api's
            name: "upperCount",
  
            // The type of this field
            type: "number",
        
            
          },
          {
            // The display name for this field
            title: "Lower Aligners",
  
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