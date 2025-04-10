import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; // Consider updating for X branding
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Added WhatsApp icon

const Contacts = () => {
  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, url: 'https://web.facebook.com/profile.php?id=100050108861104' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://x.com/WisdomMiles5' }, // Update to X if applicable
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/wisdommiles38/' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/wisdom-okon-b878b2235/' },
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com' },
    { name: 'WhatsApp', icon: WhatsAppIcon, url: 'https://wa.me/09025801482' }, // Added WhatsApp
  ];

  return (
    <Box
      sx={{
        maxWidth: '300px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #eee',
        }}
      >
        Contact via
      </Typography>
      <List sx={{ padding: 0 }}>
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <ListItem
              key={index}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                padding: '10px',
                margin: '5px 0',
                border: '1px solid #ddd',
                borderRadius: '3px',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ListItemIcon>
                <IconComponent color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={social.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Contacts;