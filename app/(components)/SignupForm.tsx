import React from 'react';
import {
    Button,
    ButtonText,
    Input,
    VStack,
    FormControl,
    Heading,
    Text,
    InputField,
    Box,
    Center
} from "@gluestack-ui/themed";

const SignupForm = () => {
    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de traitement du formulaire
    };

    return (
        <Box>
            <Center>
            <FormControl size="md" mt="$10" >
                <Center><Heading color={"var(--foreground-rgb)"} >S'inscrire</Heading></Center>
                <VStack mt="$4">
                    <Text color={"var(--foreground-rgb)"}>Nom</Text>
                    <Input
                        variant="underlined"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}>
                        <InputField
                            color={"var(--foreground-rgb)"}
                            id="username"
                            onChange={handleInputChange}
                            name="username"/>
                    </Input>
                </VStack>
                <VStack mt="$2">
                    <Text color={"var(--foreground-rgb)"} >Email</Text>
                    <Input
                        variant="underlined"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField id="email"
                                    onChange={handleInputChange}
                                    name="email"
                                    color={"var(--foreground-rgb)"}/>
                    </Input>
                </VStack>
                <VStack mt="$2">
                    <Text color={"var(--foreground-rgb)"} >Mot de passe</Text>
                    <Input
                        variant="underlined"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}>
                        <InputField id="password"
                                    onChange={handleInputChange}
                                    name="password"
                                    color={"var(--foreground-rgb)"}/>
                    </Input>
                </VStack>
                <VStack mt="$2">
                    <Text color={"var(--foreground-rgb)"} >Confirmez votre mot de passe</Text>
                    <Input
                        variant="underlined"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}>
                        <InputField
                            id="confirm_password"
                            onChange={handleInputChange}
                            name="confirm_password"
                            color={"var(--foreground-rgb)"}/>
                    </Input>
                </VStack >
                <Button size="md"
                        variant="solid"
                        action="primary"
                        isDisabled={false}
                        isFocusVisible={false}
                        mt="$4">
                    <ButtonText>S'inscrire</ButtonText>
                    </Button>
            </FormControl>
                </Center>
        </Box>
    );
};

export default SignupForm;
