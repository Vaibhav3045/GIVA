import {
    Box,
    Button, FormControl, FormLabel,
    HStack,
    Image, Input, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text, Textarea,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {PlusIcon} from "../assets/icons.jsx";
import {useEffect, useState} from "react";
import {jewelleryList} from "../assets/dummy.js";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import {EditModal} from "./EditModal.jsx";
import {AddProductModal} from "./AddProductModal.jsx";
import {fetchProducts, updateProduct} from "../api.js";
import DeleteModal from "./DeleteProductModal.jsx";



export function Page() {

    // const [products, setProducts] = useState(jewelleryList);
    const [products, setProducts] = useState([]);
    const [editableProduct, setEditableProduct] = useState({});
    const [product, setProduct] = useState({name: '', description: '', price: 0, quantity: 0, image: ''});
    const modalOneDisclosure = useDisclosure();
    const modalTwoDisclosure = useDisclosure();
    const modalThreeDisclosure = useDisclosure();

    useEffect(() => {
        fetchProducts().then((data) => {
            // console.log(data);
            setProducts(data);
        })
    },[])

    const EditProduct = (product) => {
        console.log('product', product);
        setEditableProduct(product);
        modalTwoDisclosure.onOpen();
        // setTimeout(() => modalTwoDisclosure.onOpen(), 0);
    }




    // background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
    return (
        <>
            <Box w='100%' p='64px' bg='linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)'>
                <VStack alignItems='left' w='100%'>
                    <Text textAlign='left' fontSize="4xl" >Products</Text>
                    <Button size='md' w='200px' onClick={modalOneDisclosure.onOpen} leftIcon={<PlusIcon/>} colorScheme="blue">Add Product</Button>
                    <AddProductModal isOpen={modalOneDisclosure.isOpen} onClose={modalOneDisclosure.onClose}/>
                    <VStack w='100%'  spacing={4}>
                        <HStack textAlign='left' w='100%' spacing='16px' p={4} borderWidth="1px" borderRadius="lg">
                            <Text fontSize='lg' color='gray.600' w='64px'>Image</Text>
                            <Text fontSize='lg' color='gray.600' w='40%'>Name</Text>
                            <Text fontSize='lg' color='gray.600' w='10%'>Price</Text>
                            <Text fontSize='lg' color='gray.600' w='10%'>Quantity</Text>
                        </HStack>
                        {/* Product items go here */}
                        {
                            products.map((product) => (
                                <HStack bg='white' textAlign='left'  key={product.id} w='100%' spacing='16px' p={4} borderWidth="1px" borderRadius="lg">
                                    <Image src={product.image} alt={product.name} h='64px' w='64px' objectFit='cover'/>
                                    <VStack alignItems='left' spacing='0' w='40%'>
                                        <Text textAlign='left' fontSize='xl'>{product.name}</Text>
                                        <Text noOfLines={1} textAlign='left' fontSize='md' color='gray.600'>{product.description}</Text>
                                    </VStack>
                                    <Text w='10%' fontSize='lg' color='gray.600'>₹{product.price}</Text>
                                    <Text w='10%' fontSize='lg' color='gray.600'>{product.quantity}</Text>
                                    <Button leftIcon={<DeleteIcon/>} size='sm' colorScheme='red' onClick={modalThreeDisclosure.onOpen}>Delete</Button>
                                    <DeleteModal isOpen={modalThreeDisclosure.isOpen} onClose={modalThreeDisclosure.onClose} productId={product.id}/>
                                    <Button leftIcon={<EditIcon/>} size='sm' colorScheme='blue' onClick={()=>{
                                        EditProduct(product);

                                    }}>Edit</Button>

                                </HStack>
                            ))
                        }
                        {/*<EditModal isOpen={modalTwoDisclosure.isOpen} onClose={modalTwoDisclosure.onClose} product={editableProduct}/>*/}
                    </VStack>
                </VStack>

                <Modal isOpen={modalTwoDisclosure.isOpen} onClose={modalTwoDisclosure.onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit Product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type='text' placeholder='Product Name' value={editableProduct.name}
                                       onChange={(e) => setEditableProduct({...editableProduct, name: e.target.value})}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea placeholder='Product Description'
                                          value={editableProduct.description}
                                          onChange={(e) => setEditableProduct({...editableProduct, description: e.target.value})}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Price</FormLabel>
                                <Input type='number' placeholder='Product Price'
                                       value={editableProduct.price}
                                       onChange={(e) => setEditableProduct({...editableProduct, price: e.target.value})}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Quantity</FormLabel>
                                <Input type='number' placeholder='Product Quantity'
                                       value={editableProduct.quantity}
                                       onChange={(e) => setEditableProduct({...editableProduct, quantity: e.target.value})}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Image URL</FormLabel>
                                <Input type='text' placeholder='Product Image URL'
                                       value={editableProduct.image}
                                       onChange={(e) => setEditableProduct({...editableProduct, image: e.target.value})}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={()=>{
                                updateProduct(editableProduct.id, editableProduct).then(() => {
                                    modalTwoDisclosure.onClose();
                                    window.location.reload();
                                })
                            }}>
                                Save
                            </Button>
                            <Button colorScheme='red' onClick={modalTwoDisclosure.onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </Box>
        </>
    )
}