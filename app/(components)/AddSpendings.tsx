import React from 'react';
import {
    Button,
    Input,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    InputField,
    Box,
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
            <FormControl display="flex" flexDirection="row" >

                {/*Category input*/}
                <Box px="$3">
                    <FormControlLabel>
                        <FormControlLabelText color={"var(--foreground-rgb)"}>Category</FormControlLabelText>
                    </FormControlLabel>
                    <Select>
                        <SelectTrigger variant="outline" size="md">
                            <SelectInput placeholder="Recurrence"/>
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
                                <SelectItem label="Hebdomadaire" value={"weekly"}/>
                                <SelectItem label="Mensuelle" value={"monthly"}/>
                                <SelectItem label="Annuelle" value={"yearly"}/>
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </Box>

                {/*Recurrence*/}
                <Box px="$3">
                    <FormControlLabel>
                        <FormControlLabelText color={"var(--foreground-rgb)"}>Recurrence</FormControlLabelText>
                    </FormControlLabel>
                    <Select>
                        <SelectTrigger variant="outline" size="md">
                            <SelectInput placeholder="Category"/>
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
                    bg={"gray"}
                >
                    <ButtonIcon as={AddIcon} />
                </Button>
            </FormControl>

        </Box>
    )
};

export default AddSpendings;