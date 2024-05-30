import React from 'react';
import {
    Button,
    ButtonText,
    Input,
    VStack,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    FormControlError,
    FormControlHelper,
    FormControlErrorIcon,
    FormControlHelperText,
    FormControlErrorText,
    Heading,
    Text,
    InputField,
    Box,
    Center,
    Select,
    SelectTrigger,
    SelectIcon,
    Icon,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicatorWrapper, ChevronDownIcon, SelectInput, SelectDragIndicator, SelectItem, ButtonIcon, AddIcon
} from "@gluestack-ui/themed";
import categories from '@/fakedata/categories.json';

const AddSpendings = () => {
    return (
        <Box>

            {/*Category input*/}
            <FormControl display="flex" flexDirection="row" width="50vh">
                <Box px="$3">
                    <FormControlLabel>
                        <FormControlLabelText color={"var(--foreground-rgb)"}>Category</FormControlLabelText>
                    </FormControlLabel>
                    <Select>
                        <SelectTrigger variant="outline" size="md">
                            <SelectInput placeholder="Choisissez la catégorie"/>
                            <SelectIcon mr="$3">
                                <Icon as={ChevronDownIcon}/>
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop/>
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator/>
                                </SelectDragIndicatorWrapper>
                                {categories.map((category) => (
                                    <SelectItem label={category.name} value={category.name}/>
                                ))}
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </Box>

                {/*Amount input*/}
                <Box>
                    <FormControlLabel>
                        <FormControlLabelText color={"var(--foreground-rgb)"}>Montant</FormControlLabelText>
                    </FormControlLabel>
                    <Input
                        width="30vh"
                        variant="outline"
                        size="md">
                        <InputField color={"var(--foreground-rgb)"} placeholder=""/>
                    </Input>
                </Box>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    mt="23px"
                    mx="$3"
                    isDisabled={false}
                    isFocusVisible={false}
                >
                    <ButtonIcon as={AddIcon} />
                </Button>
            </FormControl>

        </Box>
    )
};

export default AddSpendings;