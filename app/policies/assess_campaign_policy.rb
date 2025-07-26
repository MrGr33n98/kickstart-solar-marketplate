class AssessCampaignPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def create?
    manager?
  end

  def update?
    manager? || owner?
  end

  def destroy?
    admin?
  end
  
  class Scope < Scope
    def resolve
      if user&.role == 'admin'
        scope.all
      elsif user&.role == 'manager'
        scope.all
      else
        scope.where(status: :active)
      end
    end
  end
end