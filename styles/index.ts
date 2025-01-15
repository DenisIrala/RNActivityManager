import { Platform, StyleSheet } from 'react-native'

export const colors = {
	errorColor: 'red',
	primary: '#E76F51',
	background: '#fff',
	text: '#fff',
	textMuted: '#9ca3af',
	icon: '#fff',
	maximumTrackTintColor: 'rgba(255,255,255,0.4)',
	minimumTrackTintColor: 'rgba(255,255,255,0.6)',
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
		textMuted: '#9ca3af',
		icon: '#000',
		maximumTrackTintColor: 'rgba(255,255,255,0.4)',
		minimumTrackTintColor: 'rgba(255,255,255,0.6)',
	},
}
export const fontSize = {
	xs: 12,
	sm: 16,
	base: 20,
	lg: 24,
}

export const screenPadding = {
	horizontal: 24,
}
export const screenPaddingXs = {
	horizontal: 24,
}
export const settingPadding = {
	horizontal: 0,
}
export const defaultStyles = Platform.OS === "ios" ? StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
}) : StyleSheet.create({
	container: {
		top: 40,
		paddingTop:15,
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
})

export const utilsStyles = StyleSheet.create({
	centeredRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	slider: {
		height: 7,
		borderRadius: 16,
	},
	itemSeparator: {
		borderColor: colors.textMuted,
		borderWidth: StyleSheet.hairlineWidth,
		opacity: 0.3,
	},
	emptyContentText: {
		...defaultStyles.text,
		color: colors.textMuted,
		textAlign: 'center',
		marginTop: 20,
	},
	emptyContentImage: {
		width: 200,
		height: 200,
		alignSelf: 'center',
		marginTop: 40,
		opacity: 0.3,
	},
})

