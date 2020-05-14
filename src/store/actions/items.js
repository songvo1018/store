export function createItem(array) {
  return {
		type: "CREATE_ITEM",
		payload: array,
	};
}

export function removeItem(array) {
	return {
		type: "REMOVE_ITEM",
		payload: array,
	};
}

export function editItem(array) {
	return {
		type: "EDIT_ITEM",
		payload: array,
	};
}