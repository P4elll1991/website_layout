package mstyles

import "website_layout/modules/layout/app/types/layout_types/styles"

type IMStyles interface {
	GetStylesById(id string) (sts styles.IStyle, err error)
}