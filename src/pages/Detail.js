import React ,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {Box, Typography} from "@mui/material";
import NumberFormat from 'react-number-format';
import Button from "@mui/material/Button";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import {api} from '.././sevices/Config'


const Detail = () => {
    let params = useParams();
    const [products,setproducts] = useState([]);
    const [category,setcategory] = useState([]);
    const [nameCategory, setNameCategory] = useState({})
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        api.get(`/products/${params.productId}`).then(product =>setproducts(product.data))
        .catch(error => console.log(error))
        api.get(`/category`).then(category =>setcategory(category.data))
        .catch(error => console.log(error))
    },[])

    const categoryId =products.category

    useEffect(() => {
        category.map(categories => {
            if(categories.id === categoryId) {
                setNameCategory(categories)
            }
        })
    },[category]);
    

    const handleCount = (e) => {
        setCount(e.target.value)
    }

    const maxLengthCheck = (e, countProduct) => {
        if (+e.target.value > countProduct) {
            return e.target.value = countProduct
        } else if (e.target.value < 0) {
            return e.target.value = 0
        }
    }
console.log(products.name)
    return (
        <div>
            <Box sx={{m: 4}}>
                <Grid container spacing={2} sx={{pb: 4, borderBottom: "2px solid gray"}}>
                    <Grid item xs={12} md={6} lg={4}>
                        <img src={`http://localhost:3002/files/${products.images}`} alt=""/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: 'space-between',
                            height: '100%'
                        }}>
                            <Typography variant='h4' sx={{my: 1}}>
                                {products.name}
                            </Typography>
                            <Typography sx={{color: "#7e7e7e"}}>
                                <Typography component='span' sx={{color: '#2c2c2c'}}>دسته بندی ها :</Typography>
                                    <span>{nameCategory.name}</span>
                            </Typography>
                            <Typography component='span' sx={{color: '#2c2c2c'}}>برند :
                                <span style={{color:  "#7e7e7e"}}>{products.brand}</span>
                            </Typography>
                            <Box sx={{mt: 2 ,my:2}}>
                                <Typography sx={{display: 'flex', my: 1, alignItems: 'center'}}>
                                    <BarChartIcon sx={{color: '#4040b3'}}/>
                                    <span>ضمانت خانه</span>
                                </Typography>
                                <Typography sx={{display: 'flex', my: 1, alignItems: 'center'}}>
                                    <AddLocationIcon sx={{color: '#4040b3'}}/>
                                    <span>امکان پرداخت آنلاین و حضوری</span>
                                </Typography>
                                <Typography sx={{display: 'flex', my: 1, alignItems: 'center'}}>
                                    <ChangeCircleIcon sx={{color: '#4040b3'}}/>
                                    <span>  جریمه بابت پشیمانی</span>
                                </Typography>
                            </Box>

                            <Typography sx={{fontSize: '1.3rem'}}>
                                قیمت :
                                <NumberFormat
                                    value={products.price}
                                    displayType={'text'} 
                                    thousandSeparator={true}
                                    prefix={''}
                                />
                                <span>
                                    تومان
                                </span>
                            </Typography>

                            <Typography sx={{my: 3, fontSize: '1.3rem'}}>
                                موجودی :
                                <NumberFormat
                                    value={products.count}
                                    displayType={'text'} 
                                    thousandSeparator={true}
                                    prefix={''}
                                />
                                <span>
                                    عدد
                                </span>
                            </Typography>
                        {
                            +products.count === 0 ?
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        "input": {width: '50px', fontSize: '1.3rem', textAlign: 'center'}
                                    }}>
                                        <Typography variant='h5' sx={{color: 'error.main'}}>
                                            اتمام موجودی
                                        </Typography>
                                    </Box>


                            :<Box sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                "input": {width: '50px', fontSize: '1.3rem', textAlign: 'center'}
                                }}
                            >
                                <input min={0}
                                    max={''}
                                    value={count}
                                    onChange={handleCount}
                                    onInput={(e)=> maxLengthCheck(e , products.count)}
                                    style={{
                                        padding: '10px 0',
                                        borderRadius: '5px',
                                        border: '1px solid gray',
                                        outline: 'none'
                                    }}
                                    type='number'
                                />
                                <Button sx={{mx: 2}} variant="contained" color='success'>
                                    <span style={{color: '#f8f8f8'}}>افزودن به سبد خرید</span>
                                </Button>
                            </Box>
                        }
                        </Box>
                    </Grid>

                </Grid>

                <Box sx={{p: 1, py: 5}}>
                    <Typography variant='h4' sx={{mb: 4}} color='#4040b3'>
                        توضیحات
                    </Typography>
                    <Typography sx={{fontSize: '1.2rem'}}>{products.description}</Typography>
                </Box>
            </Box>
            
        </div>
    )
    
}

export default Detail ;