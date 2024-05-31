'use client';
import {useState} from "react";
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
import Cookies from "universal-cookie";
const cookies = new Cookies();


const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        // Form submission logic
    };

    return (
        <Box>
            <Center>
                <FormControl size="lg" mt="$10" onSubmit={handleSubmit}>
                    <Center><Heading color={"var(--foreground-rgb)"}>Se connecter</Heading></Center>
                    <VStack mt="$4">
                        <Text color={"var(--foreground-rgb)"}>Email</Text>
                        <Input
                            variant="underlined"
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}>
                            <InputField
                                color={"var(--foreground-rgb)"}
                                id="email"
                                onChange={handleInputChange}
                                name="email"
                            />
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
                            <InputField
                                id="password"
                                type="password"
                                onChange={handleInputChange}
                                name="password"
                                color={"var(--foreground-rgb)"}
                            />
                        </Input>
                    </VStack>
                    <Button size="md"
                            variant="solid"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}
                            mt="$4">
                        <ButtonText>Se connecter</ButtonText>
                    </Button>
                </FormControl>
            </Center>
        </Box>
    )

};
export default LoginForm;
