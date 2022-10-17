import { FC, useEffect, useState } from "react";
import NextLink from 'next/link';
import { useRouter } from "next/router";

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar:FC = () => {

  const [url, setUrl] = useState('');
  const {pathname} = useRouter();
  useEffect(() => {
    
    setUrl(pathname.slice(10));
  }, []);
  


  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref>
          <Link display='flex' alignItems='center' color='inherit'>
            <Typography variant="h6">Teslo |</Typography>
            <Typography 
              sx={{
                marginLeft:0.5
              }}
            >
              Shop  
            </Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box 
          sx={{ 
            display: {
              xs:'none',
              sm:'block',
            } 
          }} 
        
        >
          <NextLink href='/category/men' passHref>
            <Link>
              <Button color={url==="men" ? "primary" : undefined} >Hombres</Button>
            </Link>
          </NextLink>

          <NextLink href='/category/women' passHref>
            <Link>
              <Button color={url==="men" ? "primary" : undefined} >Mujeres</Button>
            </Link>
          </NextLink>

          <NextLink href='/category/kid' passHref>
            <Link>
              <Button color={url==="men" ? "primary" : undefined} >Niños</Button>
            </Link>
          </NextLink>
        </Box>

        
        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href='/cart' passHref>
          <Link>
              <IconButton>
                <Badge badgeContent={2} color='secondary' >
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
          </Link>
        </NextLink>

        <Button>
          Menu
        </Button>

      </Toolbar>
    </AppBar>
  )
}