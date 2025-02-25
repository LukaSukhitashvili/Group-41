def count_items(item_list, item):
    count = 0
    for element in item_list:
        if element == item:
            count += 1
    return count