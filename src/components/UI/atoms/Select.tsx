import React from "react";
import SS from "react-select"

const Select = () => {
  
  const ss=
    [
      {value:'any',label:"Any"},
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]



  return (
    <div className=" relative  w-full ">
      <SS
							options={ss}
             hideSelectedOptions
							styles={
								{
									indicatorSeparator: () => { },
									control: (base, state) => ({
										...base,
										boxShadow: state.isFocused ? 0 : 0,
										paddingBottom: "4px",
										paddingTop: "4px",
										borderColor: state.isFocused
											? '#79A379'
											: "#ededed",
                    
										borderWidth: "0px 0px 2px 0px",
										borderRadius: "0",
										'&:hover': {
											borderColor: state.isFocused
												? '#79A379'
												: "#ededed",
                      
										}

									}),
									option: (base, state) => ({
										...base,
										'&:hover': {
											backgroundColor: state.isFocused
												? '#79A379'
												: "#ededed",
											color: state.isFocused
												? 'white'
												: "black",

										},

									})

								}
                
                
              }
							theme={(theme) => ({
								...theme,
								borderRadius: 0,
								colors: {
									...theme.colors,
									primary25: 'none',
									primary: '#D1BB90',
								},
							})}
						/>
     
    </div>
  );
};

export default Select;
