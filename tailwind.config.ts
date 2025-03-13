
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom color palette for PostFlow AI
				brandBlue: {
					DEFAULT: '#0080FF',
					50: '#F0F8FF',
					100: '#DEF0FF',
					200: '#B8E0FF',
					300: '#80C9FF',
					400: '#40AFFF',
					500: '#0080FF',
					600: '#0066CC',
					700: '#004D99',
					800: '#003366',
					900: '#001A33',
				},
				brandGray: {
					DEFAULT: '#F7F9FC',
					50: '#FFFFFF',
					100: '#F7F9FC',
					200: '#E3E8F0',
					300: '#CFD7E5',
					400: '#B3BFD1',
					500: '#8C9CB8',
					600: '#687C9A',
					700: '#4F6280',
					800: '#374155',
					900: '#1A202C',
				},
				// Adding purple accent colors
				brandPurple: {
					DEFAULT: '#6366F1',
					50: '#F5F5FF',
					100: '#EBEBFF',
					200: '#D1D2FE',
					300: '#A5A7FA',
					400: '#8183F4',
					500: '#6366F1',
					600: '#4F52EB',
					700: '#3033D9',
					800: '#2527B5',
					900: '#1C1E87',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Poppins', 'Inter', 'sans-serif'],
				display: ['Montserrat', 'SF Pro Display', 'Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'slide-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.8',
					},
				},
				'scale': {
					'0%': {
						transform: 'scale(0.95)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-right': 'slide-right 0.6s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'scale': 'scale 0.3s ease-out',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
			boxShadow: {
				'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
				'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
				'button': '0 2px 6px rgba(0, 128, 255, 0.25)',
				'card': '0 20px 50px -15px rgba(0, 0, 0, 0.05)',
				'glow': '0 0 20px rgba(99, 102, 241, 0.2)',
				'purple-glow': '0 0 15px rgba(99, 102, 241, 0.35)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
