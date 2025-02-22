# Makefile to generate a React component file

# Define the target component name
COMPONENT_NAME ?= MyComponent

# Define the output file path
OUTPUT_FILE = src/components/$(COMPONENT_NAME).tsx

# Target to generate the component file
generate-component:
	@echo "Generating React component: $(COMPONENT_NAME)"
	@mkdir -p src/components
	@echo "$$COMPONENT_TEMPLATE" > $(OUTPUT_FILE)
	@echo "Component file created at $(OUTPUT_FILE)"

# Template for the React component
define COMPONENT_TEMPLATE
import React from 'react';

interface $(COMPONENT_NAME)Props {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const $(COMPONENT_NAME): React.FC<$(COMPONENT_NAME)Props> = ({
    color,
    className = '',
    variants = 'filled',
    size = 24,
}) => {
    const defaultColor = 'white';
    const fillColor = color || defaultColor;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-$${fillColor} $${className}`}
        >
            {variants === 'filled' ? (
                <>

                </>
            ) : variants === 'outlined' ? (
                <>

                </>
            ) : null}
        </svg>
    );
};

export default $(COMPONENT_NAME);
endef

export COMPONENT_TEMPLATE