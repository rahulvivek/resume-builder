import moment from 'moment'

export const DATE_FORMATTER = "LLL"

export const getFormattedDateStr = (date) => {
    return moment(date).format(DATE_FORMATTER)
}