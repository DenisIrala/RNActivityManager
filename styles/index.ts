import { Platform, StyleSheet } from 'react-native'

export const colors = {
	errorColor: 'red',
	primary: '#E76F51',
	background: '#fff',
	text: '#fff',
	icon: '#fff',

}
export const darkMode = {
	colors: {
		...colors,
	},
}
export const lightMode = {
	colors: {
		...colors,
		primary: '#E76F51',
		background: '#fff',
		text: '#000',
	},
}
export const fontSize = {
	xs: 12,
	sm: 16,
	base: 20,
	lg: 24,
}

export const defaultStyles = Platform.OS === "ios" ? StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		justifyContent: "center",
		alignItems: 'center',
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
}) : StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
})


