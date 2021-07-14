class Pod < ApplicationRecord
    belongs_to :plant 

    def pod_count_valid?
        if self.total_count <= 0
        # if the pod's total count is 0 or less
            self.errors.add(:pod_min, "You must plant at least one pod.")
            # This error will kick in when the validations happen
        end 
    end 
end 